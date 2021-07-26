import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
import { IContentholderData } from '../../content/contentholderSemAF/contentholder.component';


import {return_type} from '../sem-af-picker/picker.component'



type SingleRef = { text_org: string, text: string, id: number };
type Reference = { text: string, feature_name: string, text_org: string, display_name: string };
type ReferenceMulti = { feature_name: string, display_name: string, values: SingleRef[] };

export interface IPickerDataLink {
  entries: IPickerEntryData[];
  features?: any;
  annoData?: any;
  text?: string;
  id: number; // Id of the Selected Elem
  thisLink?: Link;
  after_closed: (result: {
    [id: string]: any;
    type: return_type;
  }) => void;
}


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
  public link: Link;
  public after_closed: (result: {
    [id: string]: any;
    type: return_type;
  }) => void;

  public ft = FeatureType;

  public reference: Reference[]
  public referenceMulti: ReferenceMulti[]

  public features_typed: [string, Feature][]
  public features_dict: {
    [name: string]: Feature;
  };
  public index: number;
  public addr: number;
  public id: number;

  profileForm: FormGroup;



  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPickerDataLink,
  ) { }




  public ngOnInit(): void {
    this.links = defaultLinkClasses;
    const annotationList = [];
    const { entries, features, annoData, text, id, thisLink, after_closed } = this.data;
    this.highlightAnnotation = new Map<string, boolean>();
    this.link = thisLink
    this.after_closed = after_closed;
    this.id = id;
    /*console.log("id",id)*/


    this.features = features;


    /*console.log("this.datathis.data", this.data)*/


    /*console.log("1")*/

    this.dialogRef.disableClose = true;//disable default close operation
    this.dialogRef.backdropClick().subscribe(result => {
      //this.gather();
      this.after_closed({ type: return_type.change_attribute, data: this.gather(), addr: this.link.id });
      this.dialogRef.close()
    });


    var forms = {}
    /*console.log("1")*/


    this.index = defaultLinkClasses.findIndex((x) => { return x.type == thisLink.type })
    if (this.index != -1) {

      const annon = JSON.parse(JSON.stringify(defaultLinkClasses[this.index])) as IAnnotationClass
      const featues = annon.features





      /*console.log("featues", featues, features)*/
      let reference: Reference[] = [];
      let referenceMulti: ReferenceMulti[] = [];
      for (const [key, value] of Object.entries(featues)) {
        if (key in ["begin", "end"]) continue; // begin and end are not changeable by the user

        /**
         * Sometimes the an Attribute send by uima is not present but should be
         * Manily observed with Comment
         */
        if (!(key in features)) {

          if (featues[key].type == FeatureType.Text) {
            forms[key] = new FormControl(value.value)
            /*console.log("forms0: ", key, value.value, features)*/
            this.text_inputs.push({
              key: key,
              value: `${value.value}`,
              org_string: `${value.value}`,
            })
            continue;
          }


        }


        featues[key].value = features[key]
        const text_value: string | number | boolean | number[] = featues[key].value;
        if (featues[key].type == FeatureType.Text) {
          this.text_inputs.push({
            key: key,
            value: `${text_value}`,
            org_string: `${text_value}`,
          })
          forms[key] = new FormControl(text_value)
          /*console.log("forms1: ", key, text_value)*/
        }
        else if (featues[key].type == FeatureType.Select) {
          forms[key] = new FormControl(text_value !== "" ? text_value : null)
          /*console.log("forms2: ", key, text_value, typeof (text_value))*/
        }
        else if (featues[key].type == FeatureType.Reference) {
          let text_ = null;

          try {
            if (text_value !== "null") {


              const m = find_id(annoData, text_value as number);
              if (m) {
                const { begin, end } = m["features"]
                text_ = text.slice(begin, end);
              }
            }
          } catch (error) {

          }

          reference.push({ feature_name: key, text: text_, text_org: text_, display_name: value.display_name })
          /*console.log("forms3: ", key, text_value, typeof (text_value), text_)*/
        }
        else if (featues[key].type == FeatureType.ReferenceMulti) {
          let text_: SingleRef[] = [];


          if (text_value !== null && text_value !== undefined) {
            let values = text_value as number[];

            for (const valu of values) {
              try {
                const m = find_id(annoData, valu);
                if (m) {
                  const { begin, end } = m["features"]
                  const txt = text.slice(begin, end);
                  text_.push({ text_org: txt, text: txt, id: valu });
                }

              } catch (error) {
                //console.log("error:",error)
              }
            }


          }



          referenceMulti.push({ feature_name: key, display_name: value.display_name, values: text_ })
          //console.log("forms4: ", key, text_, text_value)
        }
      }
      //console.log("reference", reference)
      //console.log("referenceMulti", referenceMulti)
      this.reference = reference;
      this.referenceMulti = referenceMulti;

      this.features_typed = Object.entries(featues);
      this.features_dict = featues;


      const t = featues[0]



      //console.log("annon", JSON.stringify(this.text_inputs, null, 4));





      this.profileForm = new FormGroup(forms);
      //console.log(this.profileForm)


      this.features_json = JSON.stringify(features, null, 4);
      //console.log(this.features_json)

      this.new_features = features;
    }
    else {
      this.profileForm = new FormGroup({})
    }
    //console.log("1")


    for (const entry of entries) {
      annotationList.push(entry);
    }
    this.annotations = annotationList.sort((a, b) => a.name < b.name ? -1 : 1);
    //console.log("1")
  }

  public deleteThis(){
    //console.log("Todo: Delete this link")
    //console.log("addr",this.addr,this.id)
    this.after_closed({ type: return_type.remove_selected_link, addr: this.id });
    this.dialogRef.close({ type: return_type.remove_selected_link})
  }

  private gather(ignore_select: string = null) {
    if (this.index == -1) return {};
    var new_features = {}

    //console.log("controls", this.profileForm.controls)
    for (const [key, elem] of Object.entries(this.profileForm.controls)) {
      const val = this.profileForm.get(key).value;

      if (this.profileForm.get(key).dirty) {
        new_features[key] = val;
      }
    }

    for (const refe of this.reference) {
      if (refe.text != refe.text_org && refe.text === null && refe.feature_name !== ignore_select) {
        new_features[refe.feature_name] = null;
      }
    }

    //console.log("Gather", JSON.stringify(new_features, null, 4))
    return new_features;
    //console.log("Gather", JSON.stringify(new_features, null, 4))
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

    //console.log({ type: return_type.selected, entry: entry, features: this.new_features })


    this.after_closed({ type: return_type.selected, entry: entry, features: this.new_features });
  }

  /**
   * Close the Dialog and make the user select start and end of the link
   */
  public add_link(entry: IAnnotationClass): void {
    this.dialogRef.close({ type: return_type.add_link, entry: entry });
  }

  public selected_ref(feature_name: string): void {
    //console.log("xx1",{ type: return_type.change_attribute, data: this.gather() });
    //this.after_closed()
    this.dialogRef.close({
      type: return_type.selected_ref,
      data: this.gather(feature_name),
      feature_name: feature_name,
      allowed_type: this.features_dict[feature_name].reference_option,
      addr: this.link.id
    });
    //console.log("xx1",feature_name);
  }

  public selected_ref_multi(feature_name: string): void {
    //console.log("xx1",{ type: return_type.change_attribute, data: this.gather() });
    const feat = this.referenceMulti.find((x) => { return x.feature_name == feature_name });
    const current_id = feat.values.filter((x) => (x.text !== null)).map((x) => x.id)

    //console.log(current_id)

    this.dialogRef.close({
      type: return_type.selected_ref_multi,
      data: this.gather(feature_name),
      feature_name: feature_name,
      current_ids: current_id,
      allowed_type: this.features_dict[feature_name].reference_option,
      addr: this.link.id
    });
    //console.log("xx1",feature_name);
  }

  public selected_after(entry: IPickerEntryData): void {
    this.dialogRef.close({ type: return_type.selected_after, entry: entry, features: this.new_features });
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
}

export interface IPickerEntryData {
  name: string;
  rgb?: string;
  concept: boolean;
}
