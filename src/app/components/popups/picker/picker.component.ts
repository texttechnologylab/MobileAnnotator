import { Component, OnInit, Inject } from '@angular/core';
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

  constructor(
    public dialogRef: MatDialogRef<PickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPickerData,
  ) { }

  public ngOnInit(): void {
    const annotationList = [];
    const conceptList = [];
    const { entries, methapher, metonym, highlights, last } = this.data;
    this.methapher = methapher;
    this.metonym = metonym;
    this.lastAnnotations = last;
    this.highlightAnnotation = new Map<string, boolean>(highlights || []);

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

  /**
   * Schließen des Dialogs mit Übergabe der gewählten Kategorie
   */
  public selected(entry: IPickerEntryData): void {
    this.dialogRef.close([entry, this.methapher, this.metonym]);
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
  animal?: any;
}

export interface IPickerEntryData {
  name: string;
  rgb?: string;
  concept: boolean;
}
