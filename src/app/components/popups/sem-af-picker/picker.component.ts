import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule
} from '@angular/material';

import { defaultAnnotationClasses, IAnnotationClass, FeatureType, Feature } from '../../tools/sem-af/sem-af.utils';


export enum return_type {
  change_attribute,
  selected,
  selected_after,
  selected_ref,
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
  public highlightAnnotation = new Map<string, boolean>();
  public lastAnnotations: IPickerEntryData[] = [];
  public features_json: string = "";
  public new_features = {}
  public text_inputs: { key: string, value: string, org_string: string }[] = []

  public ft = FeatureType;

  public reference: { text: string, feature_name: string, text_org: string }[]

  public features_typed: [string, Feature][]
  public features_dict: {
    [name: string]: Feature;
  };
  public index: number;
  public addr: number;

  profileForm: FormGroup;



  constructor(
    public dialogRef: MatDialogRef<PickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPickerData,
  ) { }

  public ngOnInit(): void {
    const annotationList = [];
    const { entries, highlights, last, features, annoData, text } = this.data;
    this.lastAnnotations = last;
    this.highlightAnnotation = new Map<string, boolean>(highlights || []);





    this.dialogRef.disableClose = true;//disable default close operation
    this.dialogRef.backdropClick().subscribe(result => {
      //this.gather();
      this.dialogRef.close({ type: return_type.change_attribute, data: this.gather() });
    });


    var forms = {}


    this.index = defaultAnnotationClasses.findIndex((x) => { return x.type == features["_type"] })
    if (this.index != -1) {

      const annon = JSON.parse(JSON.stringify(defaultAnnotationClasses[this.index])) as IAnnotationClass
      const featues = annon.features





      console.log("featues", featues, features)
      let reference: {
        text: string;
        feature_name: string;
        text_org: string;
      }[] = [];
      for (const [key, value] of Object.entries(featues)) {

        /**
         * Sometimes the an Attribute send by uima is not present but should be
         * Manily observed with Comment
         */
        if (("features" in features) && !(key in features["features"])) {

          if (featues[key].type == FeatureType.Text) {
            forms[key] = new FormControl(value.value)
            console.log("forms0: ", key, value.value, features["features"])
            this.text_inputs.push({
              key: key,
              value: `${value.value}`,
              org_string: `${value.value}`,
            })
            continue;
          }


        }


        featues[key].value = features["features"][key]
        const text_value: string | number | boolean | number[] = featues[key].value;
        if (featues[key].type == FeatureType.Text) {
          this.text_inputs.push({
            key: key,
            value: `${text_value}`,
            org_string: `${text_value}`,
          })
          forms[key] = new FormControl(text_value)
          console.log("forms1: ", key, text_value)
        }
        else if (featues[key].type == FeatureType.Select) {
          forms[key] = new FormControl(text_value !== "" ? text_value : null)
          console.log("forms2: ", key, text_value, typeof (text_value))
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

          reference.push({ feature_name: key, text: text_, text_org: text_ })
          console.log("forms3: ", key, text_value, typeof (text_value), text_)
        }
      }
      console.log("reference", reference)
      this.reference = reference;

      this.features_typed = Object.entries(featues);
      this.features_dict = featues;

      const t = featues[0]



      console.log("annon", JSON.stringify(this.text_inputs, null, 4));





      this.profileForm = new FormGroup(forms);
      console.log(this.profileForm)


      this.features_json = JSON.stringify(features, null, 4);
      console.log(this.features_json)

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

  private gather(ignore_select: string = null) {
    if (this.index == -1) return {};
    var new_features = {}

    console.log("controls", this.profileForm.controls)
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

    console.log("Gather", JSON.stringify(new_features, null, 4))
    return new_features;
    console.log("Gather", JSON.stringify(new_features, null, 4))
  }

  /**
   * Schließen des Dialogs mit Übergabe der gewählten Kategorie
   */
  public selected(entry: IPickerEntryData): void {
    this.dialogRef.close({ type: return_type.selected, entry: entry, features: this.new_features });
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

  public selected_after(entry: IPickerEntryData): void {
    this.dialogRef.close({ type: return_type.selected_after, entry: entry, features: this.new_features });
  }



}

export interface IPickerData {
  entries: IPickerEntryData[];
  metonym: boolean;
  methapher: boolean;
  highlights?: Array<[string, boolean]>;
  last: IPickerEntryData[];
  features?: any;
  annoData?: any;
  text?: string;
}

export interface IPickerEntryData {
  name: string;
  rgb?: string;
  concept: boolean;
}
