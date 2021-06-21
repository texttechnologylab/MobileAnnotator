import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { IToolElement } from 'src/app/services/interfaces';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { defaultAnnotationClasses } from '../../tools/sem-af/sem-af.utils';

import { inhe, make_filter } from '../../tools/sem-af/uima';

enum eContextMenu {
  DeleteMulti = 'CONTENT-CONTENTHOLDER.DELETE-MULTI'
}

@Component({
  selector: 'app-contentholder-semaf',
  templateUrl: './contentholder.component.html',
  styleUrls: ['./contentholder.component.scss'],
})
/**
 * Komponente für die tokenweise Darstellung der Texte
 */
export class ContentholderComponentSemAF implements OnChanges {

  public data: IContentholderData[] = [];
  public currentSelected: number = undefined;
  public lastTapped: number = undefined;
  public pageSizes = [50, 100, 150];
  public maxPage = 0;
  public contextMenuEntries: eContextMenu[] = [];

  private filterSet: Set<string> = new Set();

  private longpress = false;

  @ViewChild('contextMenuContainer', { static: true }) private readonly contextMenuRef: ElementRef;
  @ViewChild(MatMenuTrigger, { static: true }) private readonly contextMenuTrigger: MatMenuTrigger;

  @Input() inData: IContentholderData[];
  @Input() links: Link[];
  @Input() pageSize = 50;
  @Input() page = 0;
  @Input() filters: string[] = [];
  @Input() showLastTapped = false;

  @Output() selectionChanged = new EventEmitter<IContentholderData>();
  @Output() selectionLinkChanged = new EventEmitter<number>(); // number is the id of the link
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes)
    if (changes) {
      if (changes.pageSize != null || changes.page != null || changes.inData != null) {
        if (changes.inData != null || changes.pageSize != null) {
          this.maxPage = Math.floor(this.inData.length / this.pageSize);
        }
        this.pageChanged();
      }
      if (changes.filters) {
        this.filterSet = make_filter(this.filters);
      }
    }
  }

  /**
   * Händelt die Auswahl eines Tokens
   */
  public onSelect(entry: IContentholderData, event: MouseEvent) {
    console.log("enty",JSON.stringify(entry,null,4))
    event.preventDefault();
    this.preventDefault(event);

    if(!this.filterSet.has(entry.data._type) && this.filterSet.size) return;

    if (this.longpress) {
      this.longpress = false;
      return;
    }
    if (this.currentSelected) {
      if (this.currentSelected === entry.id) {
        this.currentSelected = undefined;
        return;
      }

      this.currentSelected = undefined;
    } else {
      this.selectionChanged.emit(entry);
      this.lastTapped = entry.id;
    }
  }

  public onSelectLink(id:number, event: MouseEvent){
    event.preventDefault();
    this.preventDefault(event);
    this.selectionLinkChanged.emit(id)
  }



  /**
   * Verhindert das ungewollte weiterlaufen eines Mausevents
   */
  public preventDefault(event: MouseEvent): void {
    if (!event) {
      return;
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  /**
   * Ändert die Anzahl an Token, die pro Seite dargestellt werden
   */
  public sizeChange(size: number): void {
    if (this.pageSize !== size) {
      this.pageSize = size;
      this.maxPage = Math.floor(this.inData.length / this.pageSize);
      this.pageChanged();
    }
  }

  /**
   * Ändert die momentan ausgewählte Seite des Textes
   */
  public switchPage(dir: 'fst' | '+1' | '-1' | 'lst'): void {
    switch (dir) {
      case 'fst':
        this.page = 0;
        break;
      case '+1':
        ++this.page;
        break;
      case '-1':
        --this.page;
        break;
      case 'lst':
        this.page = this.maxPage;
        break;
    }
    this.pageChanged();
  }


  /**
   * Wird aufgerufen sollte ein Kontextmenü Eintrag gewählt werden
   */
  public contextMenuEvent(event: eContextMenu): void {
    this.contextMenuTrigger.closeMenu();
    switch (event) {
      case eContextMenu.DeleteMulti:
        this.currentSelected = undefined;
        break;
    }
  }

  /**
   * Bestimmt welche CSS Klassen für das Token gelten sollen
   */
  public getClassesForEntry(entry: IContentholderData): string {
    let retval = '';
    const annoData = {};
    if (this.filterSet.size && !this.filterSet.has(entry.data._type)) {
      retval += 'filtered ';
    }
    if (entry.id === this.currentSelected) {
      retval += 'selected longpress ';
    } else if (this.showLastTapped && entry.id === this.lastTapped) {
      retval += 'selected ';
    } else {
      retval += 'unselected ';
    }

    return retval;
  }

  /**
   * Gibt einen Farbwert oder Style für den Background zurück
   */
  public getBackground(entry: IContentholderData): string | SafeStyle {
    
    const val = defaultAnnotationClasses.find((x)=>x.type == entry.data._type);
    return (val===undefined)? "#fff": val.rgb;
  }

  /**
   * Ob die Badge des Tokens unsichtbar sein soll
   */
  public isBadgeHidden(entry: IContentholderData): boolean {
    /** */
    return true // Delete this later not nessacary anymore
  }

  public links_to_string(){
   return JSON.stringify(this.links,null,4);
  }

  /**
   * Gibt den Zahlenwert für die Anzeige innerhalb der Badge zurück
   */
  public getBadgeValue(entry: IContentholderData): number {
    return 0;
    // Delete this later not nessacary anymore
  }

  private pageChanged() {
    if (this.page < 0) {
      this.page = 0;
    }
    if (this.page > this.maxPage) {
      this.page = this.maxPage;
    }

    this.data = this.inData.slice(this.page * this.pageSize, (this.page + 1) * this.pageSize);
  }
}

export interface LabelAndId{
  id: number;
  label: string;
}

export interface Link {
  from: IContentholderData;
  type: string;
  to: IContentholderData;
  id: number;
}

export interface IContentholderData {
  label: string;
  id: number;
  data: IToolElement;
}

export interface IContentholderAnnotation {
  ref: string;
  rgb: string[];
  border?: string;
  annotations: {
    [type: string]: Array<{ id: string, fp: boolean }>;
  };
  badge?: number;
  features?: any;
}
