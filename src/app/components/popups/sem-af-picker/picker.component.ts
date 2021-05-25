import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { defaultAnnotationClasses, IAnnotationClass, FeatureType, Feature } from '../../tools/sem-af/sem-af.utils';


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

  public features_typed: [string, Feature][]
  public index: number;

  profileForm: FormGroup;



  constructor(
    public dialogRef: MatDialogRef<PickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPickerData,
  ) { }

  public ngOnInit(): void {
    const annotationList = [];
    const { entries, highlights, last, features } = this.data;
    this.lastAnnotations = last;
    this.highlightAnnotation = new Map<string, boolean>(highlights || []);

    this.dialogRef.disableClose = true;//disable default close operation
    this.dialogRef.backdropClick().subscribe(result => {
      this.gather();
      this.dialogRef.close([this.gather()]);
    });


    var forms = {}


    this.index = defaultAnnotationClasses.findIndex((x) => { return x.type == features["_type"] })
    if (this.index != -1) {

      const annon = JSON.parse(JSON.stringify(defaultAnnotationClasses[this.index])) as IAnnotationClass
      const featues = annon.features





      console.log("featues", featues)
      for (const [key, value] of Object.entries(featues)) {

        if ((features["features"]) && !features["features"][key]) {
          forms[key] = new FormControl(value.value)
          console.log("forms: ", key, value.value)
          if (featues[key].type == FeatureType.Text) {
            this.text_inputs.push({
              key: key,
              value: `${value.value}`,
              org_string: `${value.value}`,
            })
          }

          continue;
        }


        featues[key].value = features["features"][key]
        const text_value = featues[key].value;
        if (featues[key].type == FeatureType.Text) {
          this.text_inputs.push({
            key: key,
            value: `${text_value}`,
            org_string: `${text_value}`,
          })
          forms[key] = new FormControl(text_value)
          console.log("forms: ", key, text_value)
        }
        else if (featues[key].type == FeatureType.Select) {
          forms[key] = new FormControl(text_value)
          console.log("forms: ", key, text_value)
        }
      }

      this.features_typed = Object.entries(featues);

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

  private gather() {
    if(this.index == -1) return {};
    var new_features = {}

    console.log("controls", this.profileForm.controls)
    for (const [key, elem] of Object.entries(this.profileForm.controls)) {
      const val = this.profileForm.get(key).value;

      if (this.profileForm.get(key).dirty) {
        new_features[key] = val;
      }
    }
    return new_features;
    console.log("Gather", JSON.stringify(new_features, null, 4))
  }

  /**
   * Schließen des Dialogs mit Übergabe der gewählten Kategorie
   */
  public selected(entry: IPickerEntryData): void {
    this.dialogRef.close([entry, this.new_features]);
  }



}

export interface IPickerData {
  entries: IPickerEntryData[];
  metonym: boolean;
  methapher: boolean;
  highlights?: Array<[string, boolean]>;
  last: IPickerEntryData[];
  features?: any;
}

export interface IPickerEntryData {
  name: string;
  rgb?: string;
  concept: boolean;
}
