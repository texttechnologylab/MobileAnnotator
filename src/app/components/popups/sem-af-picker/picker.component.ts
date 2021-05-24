import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



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
  public concepts: IPickerEntryData[] = [];
  public methapher = false;
  public metonym = false;
  public highlightAnnotation = new Map<string, boolean>();
  public lastAnnotations: IPickerEntryData[] = [];
  public features_json: string = "";
  public new_features = {}
  public text_inputs : {key: string, value: string,org_string: string}[] = []

  profileForm: FormGroup;



  constructor(
    public dialogRef: MatDialogRef<PickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPickerData,
  ) { }

  public ngOnInit(): void {
    const annotationList = [];
    const conceptList = [];
    const { entries, methapher, metonym, highlights, last, features } = this.data;
    this.methapher = methapher;
    this.metonym = metonym;
    this.lastAnnotations = last;
    this.highlightAnnotation = new Map<string, boolean>(highlights || []);

    this.dialogRef.disableClose = true;//disable default close operation
    this.dialogRef.backdropClick().subscribe(result => {
      this.gather();
      this.dialogRef.close([this.gather()]);
    });


    var forms = {}

    if (features["features"])
      for (const [key, value] of Object.entries(features["features"])) {
        if (["end", "begin"].includes(key)) continue; // end and begin are indexes should not be changed by user directly
        if (value != "null") {
          this.text_inputs.push({
            key: key,
            value: `${value}`,
            org_string: `${value}`,
          })
          forms[key]= new FormControl(value)
        }
      }



    


    this.profileForm = new FormGroup(forms);
    console.log(this.profileForm)


    this.features_json = JSON.stringify(features, null, 4);
    console.log(this.features_json)

    this.new_features = features;


    for (const entry of entries) {
      if (entry.concept) {
        conceptList.push(entry);
      } else {
        annotationList.push(entry);
      }
    }
    this.annotations = annotationList.sort((a, b) => a.name < b.name ? -1 : 1);
    this.concepts = conceptList.sort((a, b) => a.name < b.name ? -1 : 1);
  }

  private gather(){
    var new_features = {}
    for (const elem of this.text_inputs) {
      const val = this.profileForm.get(elem.key).value;
      if(val != elem.org_string){
        new_features[elem.key] = val;
      }
    }
    return new_features;
    console.log("Gather",JSON.stringify(new_features,null,4))
  }

  /**
   * Schließen des Dialogs mit Übergabe der gewählten Kategorie
   */
  public selected(entry: IPickerEntryData): void {
    this.dialogRef.close([entry, this.methapher, this.metonym, this.new_features]);
  }

  /**
   * Update der Slider für Methapher und Metonym
   */
  public sliderChange(id: number, event: { checked: boolean }): void {
    switch (id) {
      case 0:
        this.methapher = event.checked;
        break;
      case 1:
        this.metonym = event.checked;
    }
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
