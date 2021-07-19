import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PickerComponent as semafLinkPickerComponent } from 'src/app/components/popups/sem-af-link-picker/picker.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule
} from '@angular/material';


import { defaultAnnotationClasses, IAnnotationClass, FeatureType, Feature, defaultLinkClasses } from '../../tools/sem-af/sem-af.utils';
import { Link } from '../../content/contentholderSemAF/contentholder.component';
import { IContentholderData } from '../../content/contentholder/contentholder.component';
import { IToolElement } from 'src/app/services/interfaces';
import { ShapenetPickerComponent } from '../shapenet-picker/shapenet-picker.component';


export enum return_type {
  change_attribute,
  selected,
  selected_after,
  selected_ref,
  selected_ref_multi,
  add_link,
  remove_selected,
  remove_selected_link,
  do_nothing
}

type SingleRef = { text_org: string, text: string, id: number, color?: string };
type Reference = { text: string, feature_name: string, text_org: string, display_name: string };
type ReferenceMulti = { feature_name: string, display_name: string, values: SingleRef[] };


type FeatureVisu = { key: string, display_name: string, data: any, type: FeatureType }

export function find_id(x: {}, id: number) {
  for (const [key, val] of Object.entries(x)) {
    if (val[id] !== undefined) {
      return val[id]
    }
  }
}




@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
/**
 * Komponente für die Auswahl einer Kategorie des QuickAnnotators
 */
export class PickerComponent implements OnInit {


  public annotations: IPickerEntryData[] = [];
  public links: IAnnotationClass[] = [];
  public highlightAnnotation = new Map<string, boolean>();
  public lastAnnotations: IPickerEntryData[] = [];
  public features_json: string = "";
  public new_features = {}
  public text_inputs: { key: string, value: string, org_string: string }[] = []
  public current_sel: string = null;
  public features;
  public links_containing_self: Link[];
  public shapenet_id: string = null;
  public text: string;

  public shapenet_features?: Shapenet_Req = null;

  public ft = FeatureType;


  public features_typed: [string, Feature][]

  public feature_visu: FeatureVisu[];
  public features_dict: {
    [name: string]: Feature;
  };
  public index: number;
  public addr: number;
  public after_closed: (result: {
    [id: string]: any;
    type: return_type;
  }) => void;

  profileForm: FormGroup;



  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPickerData,
  ) { }

  /* Function to open the Link picker menu via button*/
  openDialog(link: Link): void {
    const annon = this.data.annoData;
    //console.log("AnonData", annon)

    let thisLink: IToolElement = annon[link.type][link.id]
    //console.log("thisLink", thisLink)



    let dialogRef = this.dialog.open(semafLinkPickerComponent, {
      data: ({
        features: thisLink.features,
        entries: defaultLinkClasses,
        annoData: this.data.annoData,
        text: this.data.text,
        id: link.id,
        thisLink: link,
        after_closed: this.after_closed,
      } as any) as any

    });

    dialogRef.afterClosed().subscribe((x)=>{
        if (x.type == return_type.remove_selected_link){
          this.dialogRef.close({ type: return_type.do_nothing })
        }
    });

  }


  public async get_shapenet_data(){
    try {
      const url = 'http://shapenet.texttechnologylab.org/getFeature?id='



      // We use force-cache to not put undue stress on the fragile servers :)
      const result: Shapenet_Req = await (await fetch(url + this.shapenet_id, { cache: "force-cache" })).json()
      this.shapenet_features = result;

      //console.log("shapenet_features",this.shapenet_features)


    } catch (error) {
      this.shapenet_features = null
    }
  }

public open_shapenet(): void {


  let dialogRef = this.dialog.open(ShapenetPickerComponent, {
    data: {term : this.text,id: this.shapenet_id},
    height: '100%',
    width: '500px',
    maxWidth: '100vw'

  });

   dialogRef.afterClosed().subscribe((x)=>{
    //this.shapenet_id =  features['object_id']
    if(!x) return;
    const {id} = x;
    this.shapenet_id = id;
    this.get_shapenet_data()
   });

}

  public ngOnInit(): void {
    
    this.links = defaultLinkClasses;
    const annotationList = [];
    const { entries, highlights, last, features, annoData, text, links, id, after_closed } = this.data;
    this.after_closed = after_closed;
    //console.log("links.fi", links.filter((x) => { return x.from.id === id || x.to.id === id }))
    this.lastAnnotations = last;
    this.highlightAnnotation = new Map<string, boolean>();
    if (highlights != null) {
      this.highlightAnnotation.set(highlights, true)
    }

    this.features = features;

    this.text = text.slice(features["begin"],features["end"])
    

    //console.log("this.datathis.data", this.data)

    this.current_sel = highlights;

    this.links_containing_self = links.filter((x) => { return x.from.id === id || x.to.id === id });

    //console.log("1")

    this.dialogRef.disableClose = true;//disable default close operation
    this.dialogRef.backdropClick().subscribe(result => {
      //this.gather();
      this.dialogRef.close({ type: return_type.change_attribute, data: this.gather() });
    });


    var forms = {}
    //console.log("1")

    const feature_visu: FeatureVisu[] = []

    this.index = defaultAnnotationClasses.findIndex((x) => { return x.type == highlights })
    if (this.index != -1) {

      const annon = JSON.parse(JSON.stringify(defaultAnnotationClasses[this.index])) as IAnnotationClass
      const featues = annon.features


      if(annon.has_shapenet){
        if(features['object_id']){
          this.shapenet_id =  features['object_id']
          this.get_shapenet_data()
          //console.log('object_id',features['object_id'])
        }
      }




      for (const [key, value] of Object.entries(featues)) {
        if (key in ["begin", "end"]) continue; // begin and end are not changeable by the user

        if (!(Object.keys(features).includes(key))) {
          features[key] = null
        }


        const text_value: string | number | boolean | number[] = features[key];
        if (featues[key].type == FeatureType.Text) {
          feature_visu.push(this.createTextInput(key, text_value as string, featues[key].display_name, forms))

        }
        else if (featues[key].type == FeatureType.Select) {
          feature_visu.push(this.createSelectInput(key, text_value as string, featues[key].display_name, forms, value))
        }
        else if (featues[key].type == FeatureType.Reference) {
          let text_ = null;
          let color = null;

          try {
            if (text_value !== "null") {


              const m = find_id(annoData, text_value as number);
              if (m) {
                const { begin, end } = m["features"]
                text_ = text.slice(begin, end);
                color = defaultAnnotationClasses.find((x) => x.type === m["_type"]).rgb

              }
            }
          } catch (error) {

          }



          feature_visu.push({
            type: FeatureType.Reference,
            key: key,
            display_name: value.display_name,
            data: { feature_name: key, text: text_, text_org: text_, display_name: value.display_name, color: color } as Reference
          })

        }
        else if (featues[key].type == FeatureType.ReferenceMulti) {
          let text_: SingleRef[] = [];


          if (text_value !== null && text_value !== undefined) {
            let values = text_value as number[];
            let color = null;

            for (const valu of values) {
              try {
                const m = find_id(annoData, valu);
                if (m) {
                  const { begin, end } = m["features"]
                  const txt = text.slice(begin, end);
                  color = defaultAnnotationClasses.find((x) => x.type === m["_type"]).rgb
                  text_.push({ text_org: txt, text: txt, id: valu, color: color });
                }

              } catch (error) {
                //console.log("error:",error)
              }
            }


          }


          feature_visu.push({
            type: FeatureType.ReferenceMulti,
            key: key,
            display_name: value.display_name,
            data: { feature_name: key, display_name: value.display_name, values: text_ } as ReferenceMulti
          })

        }
      }
      this.feature_visu = feature_visu;

      this.features_dict = featues;


      //console.log("feature_visu", feature_visu)

      this.profileForm = new FormGroup(forms);

      this.new_features = features;
    }
    else {
      this.profileForm = new FormGroup({})
    }



    for (const entry of entries) {
      annotationList.push(entry);
    }
    this.annotations = annotationList.sort((a, b) => a.name < b.name ? -1 : 1);

  }

  public createTextInput(key: string, value: string, display_name: string, forms: {}): FeatureVisu {
    const t: FeatureVisu = {
      key: key, data: {
        org_value: `${value}`,
        value: `${value}`
      },
      display_name: display_name,
      type: FeatureType.Text
    }

    forms[key] = new FormControl(value)
    return t
  }

  public createSelectInput(key: string, value: string, display_name: string, forms: {}, feature: Feature): FeatureVisu {

    const t: FeatureVisu = {
      key: key,
      data: feature.select_option,
      display_name: display_name,
      type: FeatureType.Select
    }

    forms[key] = new FormControl(value !== "" ? value : null)
    return t
  }

  public createReferenceInput(key: string, value: string, display_name: string, forms: {}, feature: Feature): FeatureVisu {

    const t: FeatureVisu = {
      key: key,
      data: feature.select_option,
      display_name: display_name,
      type: FeatureType.Reference
    }

    forms[key] = new FormControl(value !== "" ? value : null)
    return t
  }


  public onSelectLink(id: number, event: MouseEvent) {
    event.preventDefault();
    //this.selectionLinkChanged.emit(id)
  }

  private gather(ignore_select: string = null) {
    if (this.index == -1) return {};
    var new_features = {}

    if(this.shapenet_id !== null){
      new_features["object_id"] = this.shapenet_id
    }

    //console.log("controls", this.profileForm.controls)
    for (const [key, elem] of Object.entries(this.profileForm.controls)) {
      const val = this.profileForm.get(key).value;

      if (this.profileForm.get(key).dirty) {
        new_features[key] = val;
      }
    }

    for (const fe of this.feature_visu) {
      if (fe.type === FeatureType.Reference) {
        const refe = fe.data;
        if (refe.text != refe.text_org && refe.text === null && refe.feature_name !== ignore_select) {
          new_features[refe.feature_name] = null;
        }
      }
      if (fe.type === FeatureType.ReferenceMulti) {
        const non_removed = (fe.data.values as SingleRef[]).filter((x) => x.text !== null)
        if (non_removed.length !== fe.data.length) {
          new_features[fe.key] = non_removed.map((x) => x.id);
        }
      }

    }

    return new_features;
  }

  public getBackground(entry: IContentholderData): string {

    const val = defaultAnnotationClasses.find((x) => x.type == entry.data._type);
    return (val === undefined) ? "#fff" : val.rgb;
  }

  /**
   * Schließen des Dialogs mit Übergabe der gewählten Kategorie
   */
  public selected(entry: any): void {
    const e = entry as any;

    if (this.current_sel === e.type) {
      this.dialogRef.close({ type: return_type.remove_selected, entry: entry, features: this.features });
      return;
    }


    this.dialogRef.close({ type: return_type.selected, entry: entry, features: this.new_features });
  }

  /**
   * Close the Dialog and make the user select start and end of the link
   */
  public add_link(entry: IAnnotationClass): void {
    this.dialogRef.close({ type: return_type.add_link, entry: entry });
  }

  public selected_ref(feature_name: string): void {
    //console.log("xx1",{ type: return_type.change_attribute, data: this.gather() });
    this.dialogRef.close({
      type: return_type.selected_ref,
      data: this.gather(feature_name),
      feature_name: feature_name,
      allowed_type: this.features_dict[feature_name].reference_option
    });
    //console.log("xx1",feature_name);
  }

  public selected_ref_multi(feature_name: string): void {
    //console.log("xx1",{ type: return_type.change_attribute, data: this.gather() });
    const feat = this.feature_visu.find((x) => { return x.key == feature_name });
    const current_id = feat.data.values.filter((x) => (x.text !== null)).map((x) => x.id)

    //console.log(current_id)

    this.dialogRef.close({
      type: return_type.selected_ref_multi,
      data: this.gather(feature_name),
      feature_name: feature_name,
      current_ids: current_id,
      allowed_type: this.features_dict[feature_name].reference_option
    });
    //console.log("xx1",feature_name);
  }

  public selected_after(entry: IPickerEntryData): void {
    this.dialogRef.close({ type: return_type.selected_after, entry: entry, features: this.new_features });
  }

  public delete_shapenet (id:string){
    this.shapenet_id = "";
  }

}

export interface IPickerData {
  entries: IPickerEntryData[];
  metonym: boolean;
  methapher: boolean;
  highlights?: string;
  last: IPickerEntryData[];
  features?: any;
  annoData?: any;
  text?: string;
  links?: Link[];
  id: number; // Id of the Selected Elem
  after_closed: (result: {
    [id: string]: any;
    type: return_type;
  }) => void
}

export interface IPickerEntryData {
  name: string;
  rgb?: string;
  concept: boolean;
}


// Generated using quicktype
interface Shapenet_Req {
  feature: Shapenet_Feature;
  success: boolean;
}

interface Shapenet_Feature {
  wnsynset:            string;
  wnlemmas:            string[];
  solidVolume:         string;
  isContainer:         boolean;
  surfaceVolume:       string;
  weight:              string;
  tags:                string[];
  unit:                string;
  supportSurfaceArea:  string;
  staticFrictionForce: string;
  name:                string;
  alignedDims:         string;
  id:                  string;
  categories:          string[];
  up:                  string;
  front:               string;
  has_parts:           boolean;
}