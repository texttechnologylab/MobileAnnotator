import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAnnotationClass } from '../../tools/quick-anno/quick-anno.utils';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
/**
 * Komponente für den Filter Dialog des QuickAnnotator und KnowledgeBaseLinkers
 */
export class FilterComponent implements OnInit {

  public filter: Array<[string, IFilterDisplay[]]> = [];

  private selectedFilter = new Set<string>();

  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [FilterData, string[]],
  ) { }

  public ngOnInit(): void {
    const [filterData, highlights] = this.data;
    if (filterData.type === 'single') {
      this.filter = [['', filterData.data.sort((a, b) => a.name < b.name ? -1 : 1)]];
    } else {
      for (const [name, list] of Object.entries(filterData.data)) {
        this.filter.push([name, list.sort((a, b) => a.name < b.name ? -1 : 1)]);
      }
    }
    this.selectedFilter = new Set<string>(highlights);
  }

  /**
   * Aktualisiert die gewählten Filter aufgrund der neuen Auswahl
   */
  public selected(entry: IFilterDisplay): void {
    if (this.selectedFilter.has(entry.type)) {
      this.selectedFilter.delete(entry.type);
    } else {
      this.selectedFilter.add(entry.type);
    }
  }

  /**
   * Bestimmt welche CSS Klassen für den Eintrag gelten sollen
   */
  public getClassesForEntry(entry: IFilterDisplay): string {
    let retval = '';

    if (this.selectedFilter.has(entry.type)) {
      retval += 'highlight';
    } else if (this.selectedFilter.size > 0) {
      retval += 'filtered';
    }

    return retval;
  }

  /**
   * Setzt die ausgewählten Filter zurück
   */
  public unselectAll(): void {
    this.selectedFilter = new Set<string>();
  }

  /**
   * Schließt den Filter Dialog
   */
  public close(): void {
    this.dialogRef.close(this.selectedFilter);
  }
}

export type FilterData = ISingleListFilter | IMultiListFilter;

export interface ISingleListFilter {
  type: 'single';
  data: IFilterDisplay[];
}

export interface IMultiListFilter {
  type: 'multi';
  data: {
    [key: string]: IFilterDisplay[];
  };
}

export interface IFilterDisplay {
  name: string;
  rgb: string;
  type: string;
  [key: string]: unknown;
}
