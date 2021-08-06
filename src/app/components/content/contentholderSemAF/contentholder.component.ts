import { Component, Input, Output, EventEmitter, OnChanges, AfterViewInit, SimpleChanges, ElementRef, ViewChild, HostListener } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { IToolElement } from 'src/app/services/interfaces';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { defaultAnnotationClasses } from '../../tools/sem-af/sem-af.utils';

import { inhe, make_filter } from '../../tools/sem-af/uima';
import { getLinkPointsString } from './contentholder.utils';
import { MatSnackBar } from '@angular/material';

enum eContextMenu {
  DeleteMulti = 'CONTENT-CONTENTHOLDER.DELETE-MULTI'
}

interface Pos {
  x: number,
  y: number
}

interface LinkPos {
  start: Pos,
  end: Pos
}

@Component({
  selector: 'app-contentholder-semaf',
  templateUrl: './contentholder.component.html',
  styleUrls: ['./contentholder.component.scss'],
})
/**
 * Komponente für die tokenweise Darstellung der Texte
 */
export class ContentholderComponentSemAF implements OnChanges, AfterViewInit {

  public data: IContentholderData[] = [];
  public multiToken: IContentholderData[] = []
  public currentSelected: number = undefined;
  public lastTapped: number = undefined;
  public pageSizes = [50, 100, 150];
  public maxPage = 0;
  public contextMenuEntries: eContextMenu[] = [];
  public link_visu: string[] = [];
  public splitToken: IContentholderData;

  public linksPos: LinkPos[] = [];

  private filterSet: Set<string> = new Set();

  private longpress = false;
  public lastLong: number = -1;
  private link_render_date: Date = null;

  @ViewChild('contextMenuContainer', { static: true }) private readonly contextMenuRef: ElementRef;
  @ViewChild(MatMenuTrigger, { static: true }) private readonly contextMenuTrigger: MatMenuTrigger;

  @Input() inData: IContentholderData[];
  @Input() links: Link[] = [];
  @Input() pageSize = 50;
  @Input() page = 0;
  @Input() filters: string[] = [];
  @Input() showLastTapped = false;
  @Input() showCancelSelection = false;

  @Output() selectionChanged = new EventEmitter<IContentholderData>();
  @Output() createMultiToken = new EventEmitter<IContentholderData[]>();
  @Output() deleteMultiToken = new EventEmitter<IContentholderData>();
  @Output() selectionCanceled = new EventEmitter<void>();
  @Output() selectionLinkChanged = new EventEmitter<number>(); // number is the id of the link
  constructor(
    private sanitizer: DomSanitizer,
    public snackBar: MatSnackBar,
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    /*console.log("ngOnChanges", changes)*/
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
      if (changes.links) {
        const d = new Date();
        this.link_render_date = d;
        setTimeout(() => { this.render_links(this.links, d) }, 100); // Ensure entities are rendered
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const d = new Date();
    this.link_render_date = d;
    setTimeout(() => { this.render_links(this.links, d) }, 100); // Ensure entities are rendered
  }


  public render_links(links: Link[], date: Date) {
    //if(date < this.link_render_date) return; // only render once

    const base = document.querySelector("#mainContent").getBoundingClientRect() as DOMRect;
    const li: LinkPos[] = []
    if (this.links === undefined) {
      return;
    }
    this.link_visu = [];
    const links_ = [...this.links];
    console.log(links_)
    for (let index = 0; index < this.links.length; index++) {
      const link = this.links[index];
      try {



        const from_ = document.querySelector(`#entity${link.from.id}`)
        const to_ = document.querySelector(`#entity${link.to.id}`)
        if (!from_ || !to_) continue; // maybe something else here

        const from = from_.getBoundingClientRect() as DOMRect;
        const to = to_.getBoundingClientRect() as DOMRect;

        // https://github.com/henlein/TextAnnotator/blob/main/WebApplication/app/view/tool/semaf/SemAFPanelController.js
        // At about line 1239

        const pos: LinkPos = {
          start: {
            x: from.x + from.width / 2 + window.scrollX,
            y: from.y - base.y + window.scrollY
          },
          end: {
            x: to.x + to.width / 2 + window.scrollX,
            y: to.y - base.y + window.scrollY
          }
        };

        if (pos.start.y == pos.end.y) { // Both Nodes are on the same line

        }


        const a = getLinkPointsString(from_, to_, false, 1, null);
        this.link_visu.push(a.pathStr);
        /*console.log("svg Link a",a)*/

        li.push({
          start: {
            x: from.x + from.width / 2 + window.scrollX,
            y: from.y - base.y + window.scrollY
          },
          end: {
            x: to.x + to.width / 2 + window.scrollX,
            y: to.y - base.y + window.scrollY
          }
        })

        /*console.log("link",from,to,link)*/
      } catch (error) {
        console.log(error,"Testz")
      }
    }

    this.linksPos = li;

    /*console.log("document.getElementById('loginInput')",li)*/
  }

  public splitUpToken() {
    if (!this.splitToken) return;
    this.deleteMultiToken.emit(this.splitToken)
    this.splitToken = null;
    this.multiToken = [];
    this.lastLong = -1;
    const el: HTMLDivElement = document.querySelector("#deleteMulti")
    el.style.visibility = "hidden";
  }

  public cancelSplit() {
    this.splitToken = null;
    const el: HTMLDivElement = document.querySelector("#deleteMulti")
    el.style.visibility = "hidden";
  }

  public addToMultitoken(data: IContentholderData, event: PointerEventInput & { timeStamp: number }) {

    event.preventDefault();


    this.preventDefault(event.srcEvent as MouseEvent);
    this.longpress = true;
    if(this.multiToken.length>0){
      if(this.multiToken[0] == data){
        this.multiToken = [];
        this.lastLong = -1;
        console.log("Cancel create multitoken")
        return
      }
    }
    this.multiToken.push(data)
    if(this.multiToken.length==1)
      this.snackBar.open(`Select start/end for Multitoken starting at "${data.label}"`, null, { duration: 2000, })

    if (data.is_multi === true) {

      const el: HTMLDivElement = document.querySelector("#deleteMulti")
      const en = document.querySelector(`#entity${data.id}`).getBoundingClientRect() as DOMRect

      const y = `${en.y + en.height + window.scrollY}px`
      const x = `${en.x + en.width / 2 + window.scrollX - el.getBoundingClientRect().width / 2}px`
      /*console.log(x,y)*/
      this.splitToken = data;

      /*console.log("Split Multitoken",en)*/
      el.style.top = y;
      el.style.left = x;
      el.style.visibility = "visible";

      return;
    }
    this.lastLong = data.id;

    /*console.log("Long press",this.multiToken)*/
    if (this.multiToken.length == 2) {
      this.createMultiToken.emit([...this.multiToken]);
      this.multiToken = [];
      this.lastLong = -1;
      return;
    }
  }

  public ngAfterViewInit() {


  }

  /**
   * Händelt die Auswahl eines Tokens
   */
  public onSelect(entry: IContentholderData, event: MouseEvent) {
    event.preventDefault();
    this.preventDefault(event);

    if (!this.filterSet.has(entry.data._type) && this.filterSet.size) return;

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

  public onSelectLink(id: number, event: MouseEvent) {
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

    const val = defaultAnnotationClasses.find((x) => x.type == entry.data._type);
    return (val === undefined) ? "#fff" : val.rgb;
  }

  /**
   * Ob die Badge des Tokens unsichtbar sein soll
   */
  public isBadgeHidden(entry: IContentholderData): boolean {
    /** */
    return true // Delete this later not nessacary anymore
  }

  public links_to_string() {
    return JSON.stringify(this.links, null, 4);
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
    setTimeout(() => { this.render_links(this.links, new Date()) }, 100);
  }
}

export interface LabelAndId {
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
  border?: string;
  is_multi?: boolean;
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


