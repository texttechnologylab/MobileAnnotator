import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { IToolElement } from 'src/app/services/interfaces';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

enum eContextMenu {
  DeleteMulti = 'CONTENT-CONTENTHOLDER.DELETE-MULTI'
}

@Component({
  selector: 'app-contentholder',
  templateUrl: './contentholder.component.html',
  styleUrls: ['./contentholder.component.scss'],
})
/**
 * Komponente für die tokenweise Darstellung der Texte
 */
export class ContentholderComponent implements OnChanges {

  public data: IContentholderData[] = [];
  public currentSelected: string = undefined;
  public lastTapped: string = undefined;
  public pageSizes = [50, 100, 150];
  public maxPage = 0;
  public contextMenuEntries: eContextMenu[] = [];

  private filterSet: Set<string>;

  private longpress = false;

  @ViewChild('contextMenuContainer', { static: true }) private readonly contextMenuRef: ElementRef;
  @ViewChild(MatMenuTrigger, { static: true }) private readonly contextMenuTrigger: MatMenuTrigger;

  @Input() inData: IContentholderData[];
  @Input() inAnnotations: { [id: string]: IContentholderAnnotation } = {};
  @Input() pageSize = 50;
  @Input() page = 0;
  @Input() filters: string[] = [];
  @Input() showLastTapped = false;

  @Output() selectionChanged = new EventEmitter<IContentholderData>();
  @Output() createMultiToken = new EventEmitter<[string, string]>();
  @Output() removeMultiToken = new EventEmitter<string>();
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes.pageSize != null || changes.page != null || changes.inData != null) {
        if (changes.inData != null || changes.pageSize != null) {
          this.maxPage = Math.floor(this.inData.length / this.pageSize);
        }
        this.pageChanged();
      }
      if (changes.filters) {
        this.filterSet = new Set(this.filters);
      }
    }
  }

  /**
   * Händelt die Auswahl eines Tokens
   */
  public onSelect(entry: IContentholderData, event: MouseEvent) {
    event.preventDefault();
    this.preventDefault(event);
    if (this.longpress) {
      this.longpress = false;
      return;
    }
    if (this.currentSelected) {
      if (this.currentSelected === entry.id) {
        this.currentSelected = undefined;
        return;
      }

      this.createMultiToken.emit([this.currentSelected, entry.id]);
      this.currentSelected = undefined;
    } else {
      this.selectionChanged.emit(entry);
      this.lastTapped = entry.id;
    }
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
   * Markiert ein Token als "longpress"-gewählt
   */
  public multiSelect(entry: IContentholderData, event: PointerEventInput & { timeStamp: number }): void {
    this.longpress = true;
    event.preventDefault();
    this.preventDefault(event.srcEvent as MouseEvent);
    this.lastTapped = undefined;
    this.selectionChanged.emit(undefined);
    this.currentSelected = entry.id;
    this.contextMenuRef.nativeElement.style.left = event.center.x + 'px';
    this.contextMenuRef.nativeElement.style.top = event.center.y + 'px';

    this.contextMenuEntries = [];

    const childs = entry.data.features.children;
    if (childs && Array.isArray(childs) && childs.length) {
      this.contextMenuEntries.push(eContextMenu.DeleteMulti);
    }

    if (this.contextMenuEntries.length) {
      this.contextMenuTrigger.openMenu();
    }
  }

  /**
   * Wird aufgerufen sollte ein Kontextmenü Eintrag gewählt werden
   */
  public contextMenuEvent(event: eContextMenu): void {
    this.contextMenuTrigger.closeMenu();
    switch (event) {
      case eContextMenu.DeleteMulti:
        this.removeMultiToken.emit(this.currentSelected);
        this.currentSelected = undefined;
        break;
    }
  }

  /**
   * Bestimmt welche CSS Klassen für das Token gelten sollen
   */
  public getClassesForEntry(entry: IContentholderData): string {
    let retval = '';
    const annoData = this.inAnnotations[entry.id];
    if (this.filterSet.size && (!annoData || !Object.keys(annoData.annotations).some((a) => this.filterSet.has(a)))) {
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
    const rgbs = this.inAnnotations[entry.id] && this.inAnnotations[entry.id].rgb || [];
    if (rgbs.length < 2) {
      // Fall: es gibt (k)einen Farbwert durch Annotationen
      return rgbs[0] || '#ffffff';
    }
    // Fall: es gibt mehr als zwei Farbwerte durch Annotationen
    let retval = 'linear-gradient(45deg, ';

    const percent = 100 / rgbs.length;
    for (const [idx, color] of rgbs.entries()) {
      retval += color + ` ${percent * idx}%, ` + color + ` ${percent * (idx + 1)}%`;
      retval += (idx !== rgbs.length - 1 ? ', ' : ')');
    }
    return this.sanitizer.bypassSecurityTrustStyle(retval);
  }

  /**
   * Ob die Badge des Tokens unsichtbar sein soll
   */
  public isBadgeHidden(entry: IContentholderData): boolean {
    if (!this.inAnnotations[entry.id]) {
      return true;
    }
    return !this.inAnnotations[entry.id].badge;
  }

  /**
   * Gibt den Zahlenwert für die Anzeige innerhalb der Badge zurück
   */
  public getBadgeValue(entry: IContentholderData): number {
    if (!this.inAnnotations[entry.id]) {
      return 0;
    }
    return this.inAnnotations[entry.id].badge || 0;
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

export interface IContentholderData {
  label: string;
  id: string;
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
}
