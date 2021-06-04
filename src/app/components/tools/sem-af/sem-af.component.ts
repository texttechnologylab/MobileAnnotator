import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService, } from 'src/app/services/document.service';
import { ITool, IToolElement } from 'src/app/services/interfaces';
import { IContentholderData, IContentholderAnnotation } from '../../content/contentholderSemAF/contentholder.component';
import { PickerComponent } from '../../popups/sem-af-picker/picker.component';
import { IAnnotationClass, defaultAnnotationClasses, defaultLinkClasses } from './sem-af.utils';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Subscription, PartialObserver } from 'rxjs';
import { FilterComponent } from '../../popups/filter/filter.component';
import { getAnnotation, quickTreeType, commentType, IFingerprint, fingerprintType, getTypedAnnotation } from '../utils';
import { CommentsComponent, ICommentData } from '../../popups/comments/comments.component';
import { IMenuListing, IMenuAction, returnEventId } from '../../menu/tool-bar/tool-bar.component';

import {return_type} from '../../popups/sem-af-picker/picker.component'

@Component({
  selector: 'app-sem-af',
  templateUrl: './sem-af.component.html',
  styleUrls: ['./sem-af.component.scss']
})
/**
 * Komponente für die Darstellung des QuickAnnotator Werkzeuges
 */
export class SemAF implements OnInit, OnDestroy {

  public data: IContentholderData[] = [];
  public annoData: { [id: string]: IContentholderAnnotation } = {};
  public pageSizes = [35, 60, 100, 150, 250];
  public pageSize = this.pageSizes[0];
  public mode = 1;
  public activeFilters: string[] = [];
  public selectedAnnotation: IAnnotationClass;
  public toolbarMenu: Array<IMenuAction | IMenuListing> = [];

  private casId: string;
  private viewId: string;
  private tool: ITool;


  private subscriptions: Subscription[] = [];
  private lastAnnations: IAnnotationClass[] = [];
  private fingerprints = new Map<string, IFingerprint>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService,
    private documentService: DocumentService,
    private websocketService: WebsocketService,
    public dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.menuService.hideMenubar();
    this.genearteToolbarMenu();

    // Query Parameter der URL auslesen um darüber Dokument und View zu laden
    const paramObserver: PartialObserver<{ [key: string]: string }> = {
      next: (params) => {
        this.casId = params.cas;
        this.viewId = params.view;
        this.generateData();
      }
    };
    this.route.queryParams.subscribe(paramObserver);
    console.log({ 1: this.documentService.currentCAS.text })

    // Auf Änderungen des Dokuments reagieren
    const changeObserver: PartialObserver<void> = {
      next: () => this.generateData(),
    };
    this.subscriptions.push(this.documentService.casChanged.subscribe(changeObserver));
  }

  public ngOnDestroy(): void {
    // Beende die momentanen Subscriptions
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  /**
   * Änderungen am Dokument speichern
   */
  public saveCas(): void {
    this.documentService.saveCas(this.casId);
  }

  /**
   * Navigiere zur Dokumenten Ansicht
   */
  public navigateDocument(): void {
    this.router.navigate(['document'], { queryParams: { cas: this.casId, view: this.viewId } });
  }

  /**
   * Markiere ein Token als ausgewähltes Element
   */
  public tokenSelect(data: IContentholderData): void {
    if (!data) {
      return;
    }

    switch (this.mode) {
      case 0:
        // Modus: Mehrfache Annotation (Auswahl der Kategorie über Schaltfläche am unteren Rand)
        if (!this.selectedAnnotation) {
          return;
        }
        this.handleAnnotationSelect(data, this.selectedAnnotation);
        break;

      case 1:
        // Modus: Einzelne Annotation (Auswahl der Kategorie über einen Popup Dialog)
        const picker = this.dialog.open(PickerComponent, {
          data: {
            features: (this.annoData[data.id] || { features: {} }).features,
            entries: defaultAnnotationClasses,
            last: this.lastAnnations,
            highlights: this.annoData[data.id] &&
              Object.entries(this.annoData[data.id].annotations).map(([type, array]) => [type, array.some(({ fp }) => fp)]) || [],
          },
          height: 'inherit',

        });
        picker.afterClosed().subscribe((result:{type:return_type,[id: string]:any}) => {
          console.log("CLOSED!")
          var new_features;
          

          if (result) {
            if (result.type == return_type.change_attribute) {
              if (this.annoData[data.id]) {
                if (Object.entries(result.data).length == 0) return;
                const addr = this.annoData[data.id].features["_addr"];
                this.update_feature(addr, result.data)
              }
            } else if (return_type.selected == result.type) {
              this.selectedAnnotation = result.entry;
              new_features = result.features;
              this.handleAnnotationSelect(data, this.selectedAnnotation);
            }
            else if(return_type.selected_after == result.type){
              this.selectedAnnotation = result.entry;
              const featues = {
                begin: data.data.features.end,
                end: data.data.features.end,
              }
          
          
              console.log("data:  ", JSON.stringify(data, null, 4));
              const features = {};
          
              const queue: IQueueElement = {
                cmd: 'create',
                data: {
                  bid: '_b0_',
                  features: featues,
                  _type: this.selectedAnnotation.type,
                }
              };
              console.log("queue11:  ", JSON.stringify(queue, null, 4));
              this.sendBatch([queue]);
            }

          }
        });
        break;
    }
  }

  public changePageSize(num: number): void {
    this.pageSize = num;
  }



  public openFilterSelection(): void {
    const filterData = {
      type: 'multi',
      data: {},
    };

    const filter = this.dialog.open(FilterComponent, {
      data: [filterData, this.activeFilters],
      height: 'inherit'
    });
    filter.afterClosed().subscribe((result) => {
      if (result) {
        this.activeFilters = Array.from(result);
      }
    });
  }

  /**
   * Erzeuge ein Multitoken zwischen den im Tupel übergebenen IDs
   */
  public createMultiToken([fstId, sndId]: [string, string]): void {
    const fstToken = getAnnotation(this.tool.toolElements[quickTreeType][fstId]);
    const sndToken = getAnnotation(this.tool.toolElements[quickTreeType][sndId]);

    if (!fstToken || !sndToken) {
      // IDs waren ungültig
      return;
    }

    // Bestimmte den Textabschnitt, der als Multitoken zusammengefasst werden soll
    const begin = Math.min(fstToken.features.begin, sndToken.features.begin);
    const end = Math.max(fstToken.features.end, sndToken.features.end);

    const possibles = Object.values(this.tool.toolElements[quickTreeType]).map((entry) => getAnnotation(entry));
    const children: number[] = [];

    for (const entry of possibles) {
      if (!entry) {
        continue;
      }
      if (entry.features.parent === 'null' && entry.features.begin >= begin && entry.features.end <= end) {
        children.push(entry._addr);
      }
    }

    let batchId = 0;
    const queue: IQueueElement[] = [{
      cmd: 'create',
      data: {
        bid: '_b0_',
        features: {
          begin,
          end,
          children,
        },
        _type: quickTreeType,
      }
    }];

    for (const id of children) {
      queue.push({
        cmd: 'edit',
        data: {
          bid: `_b${++batchId}_`,
          addr: `${id}`,
          features: {
            parent: '_b0_',
          }
        }
      });
    }

    this.sendBatch(queue);
  }

  /**
   * Löse ein Multitoken wieder in einzelne Tokens auf
   */
  public removeMultiToken(id: string): void {
    this.sendBatch([{
      cmd: 'remove',
      data: {
        bid: '_b0_',
        addr: id,
      }
    }]);
  }

  /**
   * Reagiere auf die Auswahl eines Kontextmenü Eintrages der Toolbar
   */
  public onMenuSelect(event: string[]): void {
    const [id, parent] = event;
    switch (id) {
      case 'save':
        this.saveCas();
        break;

      case 'filter':
        this.openFilterSelection();
        break;

      case returnEventId:
        this.navigateDocument();
        break;

      default:
        const num = Number.parseInt(id, 10);
        switch (parent) {
          case 'items':
            if (this.pageSizes.some((size) => size === num)) {
              this.pageSize = num;
              this.genearteToolbarMenu();
            }
            break;

          case 'modes':
            if (num < 4 && num >= 0) {
              this.mode = num;
              this.genearteToolbarMenu();
            }
        }
    }
  }

  /**
   * Verarbeite die geladenen Daten für die Darstellung innerhalb des Werkzeuges
   */
  private generateData(): void {
    this.tool = this.documentService.currentTool;
    const tokenMap = new Map<number, Map<number, number[]>>();
    const text = this.documentService.currentCAS.text;
    const tokens = this.tool.toolElements[quickTreeType] || {};
    const data: IContentholderData[] = [];
    const annotations: { [id: string]: IContentholderAnnotation } = {};

    for (const fingerprint of Object.values(this.tool.toolElements[fingerprintType] || {})) {
      const elem = getTypedAnnotation<IFingerprint>(fingerprint);
      if (!elem) {
        continue;
      }
      this.fingerprints.set(`${elem.features.reference}`, elem);
    }



    for (const [id, anno] of Object.entries(tokens)) {
      const token = getAnnotation(anno);
      if (!token || token.features.parent !== 'null') {
        continue;
      }
      const begin = token.features.begin;
      const end = token.features.end;
      if (!tokenMap.has(begin)) {
        tokenMap.set(begin, new Map<number, number[]>());
      }
      const beginMap = tokenMap.get(begin);
      if (!beginMap.has(end)) {
        beginMap.set(end, []);
      }
      beginMap.get(end).push(data.length);
      data.push({
        label: text.slice(begin, end),
        id,
        data: token,
      });
    }
    console.log(data)
    // tslint:disable-next-line: max-line-length
    const types = [...defaultAnnotationClasses];

    for (const { type, rgb } of types) {
      const typeAnnoations = this.tool.toolElements[type];
      if (!typeAnnoations) {
        continue;
      }
      for (const [annoId, anno] of Object.entries(typeAnnoations)) {
        const annotation = getAnnotation(anno);

        if (!annotation) {
          continue;
        }

        /** This tool was not designed for empty tokens, we create them in a hacky way. */
        if (annotation.features.begin == annotation.features.end) {
          const idx = data.length;
          data.push({
            label: "∅",
            id: `do_not_use_${Math.floor(Math.random() * 10000)}`,
            data: {
              _addr: null,
              _type: "org.texttechnologylab.annotation.type.QuickTreeNode",
              features: {
                begin:annotation.features.begin,
                end:annotation.features.begin
              }
            },
          });

          const mapping = annotations;
          const id = data[idx].id;
          if (!mapping[id]) {
            mapping[id] = {
              rgb: [],
              badge: 0,
              ref: id,
              annotations: {},
              features: anno
            };
          }
          const entry = mapping[id];
          entry.rgb.push(rgb);
          //entry.border = concept ? '0.2em dashed darkgrey' : undefined;
          if (!entry.annotations[type]) {
            entry.annotations[type] = [];
          }
          entry.annotations[type].push({ id: annoId, fp: this.fingerprints.has(annoId) });
          continue;
        }
        const beginMap = tokenMap.get(annotation.features.begin);
        if (!beginMap) {
          continue;
        }

        const idxArray = beginMap.get(annotation.features.end);
        if (!idxArray) {
          continue;
        }



        for (const idx of idxArray) {
          const mapping = annotations;
          const id = data[idx].id;
          if (!mapping[id]) {
            mapping[id] = {
              rgb: [],
              badge: 0,
              ref: id,
              annotations: {},
              features: anno
            };
          }
          const entry = mapping[id];
          entry.rgb.push(rgb);
          //entry.border = concept ? '0.2em dashed darkgrey' : undefined;
          if (!entry.annotations[type]) {
            entry.annotations[type] = [];
          }
          entry.annotations[type].push({ id: annoId, fp: this.fingerprints.has(annoId) });
          
        }
      }
    }

    this.data = data.sort((a, b) => a.data.features.begin - b.data.features.begin);
    this.annoData = annotations;
  }

  private handleAnnotationSelect(data: IContentholderData, annotationClass: IAnnotationClass): void {
    let toRemove: IToolElement;

    const annotations = this.tool.toolElements[annotationClass.type];
    if (annotations) {
      for (const anno of Object.values(annotations)) {
        const annotation = getAnnotation(anno);
        if (!annotation) {
          continue;
        }
        if (annotation.features.begin === data.data.features.begin && annotation.features.end === data.data.features.end) {
          toRemove = annotation;
          break;
        }
      }
    }


    const index = this.lastAnnations.findIndex(({ type }) => type === annotationClass.type);
    if (index !== -1) {
      this.lastAnnations = [annotationClass, ...this.lastAnnations.filter(({ type }) => type !== annotationClass.type)];
    } else {
      this.lastAnnations.unshift(annotationClass);
      this.lastAnnations = this.lastAnnations.slice(0, 3);
    }

    if (toRemove) {
      this.removeAnnotation(toRemove);
      //console.log("data remove:  ",JSON.stringify(toRemove));
    } else {
      const all_annotations = this.annoData;
      //for annotation check if there are other annotations saved *by annoID, if yes remove, if no continue
      //console.log("alle",all_annotations);
      //console.log("data id", data.id);
      for (const obj in all_annotations) {
        if (obj == data.id) {
          for (const obj in all_annotations[data.id].annotations) {
            //console.log("annoids", all_annotations[data.id].annotations[obj][0].id);
            this.removeallAnnotations(all_annotations[data.id].annotations[obj][0].id);
          }
        }
      }

      this.createAnnotation(data);
    }
  }



  /**
   * Updates features of a given addr
   */
  private update_feature(addr: number, features: {}): void {
    const queue: IQueueElement = {
      cmd: 'edit',
      data: {
        bid: '_b0_',
        addr: `${addr}`,
        features: features,
      }
    };
    this.sendBatch([queue]);
  }

  /**
   * Erzeugt eine Annotation
   */
  private createAnnotation(data: IContentholderData): void {
    const abc: [string, (string | number | boolean)][]
      = Object.entries(this.selectedAnnotation.features).map((x) => [x[0], x[1].value]);
    // Convert (string,Feature)[] to (string,(string | number | boolean))[]

    const featues = {
      begin: data.data.features.begin,
      end: data.data.features.end,
    }

    for (const [key,value] of abc) {
      //featues[key] = value
    }

    console.log("data:  ", JSON.stringify(data, null, 4));
    const features = {};

    const queue: IQueueElement = {
      cmd: 'create',
      data: {
        bid: '_b0_',
        features: featues,
        _type: this.selectedAnnotation.type,
      }
    };
    console.log("queue:  ", JSON.stringify(queue, null, 4));
    this.sendBatch([queue]);
  }

  /**
   * Entferne eine Annotation
   */
  private removeAnnotation(data: IToolElement): void {
    const queue: IQueueElement = {
      cmd: 'remove',
      data: {
        bid: '_b0_',
        addr: `${data._addr}`,
      }
    };
    this.sendBatch([queue]);
  }


  /**
   * Remove all annotations
   */
  private removeallAnnotations(addr: string): void {
    //console.log("Remove");
    //console.log("data remove:  ",JSON.stringify(data,null,4));
    //console.log(`${data._addr}`);
    const queue: IQueueElement = {
      cmd: 'remove',
      data: {
        bid: '_b0_',
        addr: `${addr}`,
      }
    };
    //console.log("queue:  ",JSON.stringify(queue,null,4));
    this.sendBatch([queue]);
  }

  private sendBatch(queue: IQueueElement[]): void {
    this.websocketService.send({
      cmd: 'work_batch',
      data: {
        casId: this.casId,
        options: [{ privateSession: false }],
        queue,
        toolName: 'quickpanel',
        view: this.viewId,
      }
    });
  }

  /**
   * Befülle das Kontextmenü der Toolbar
   */
  private genearteToolbarMenu(): void {
    const items: IMenuListing = {
      type: 'listing',
      id: 'items',
      name: 'TOOL-QUICKANNO.ITEMS',
      list: [],
    };
    for (const size of this.pageSizes) {
      items.list.push({
        type: 'action',
        id: `${size}`,
        name: `${size}`,
        selected: size === this.pageSize,
      });
    }
    const modes: IMenuListing = {
      type: 'listing',
      id: 'modes',
      name: 'TOOL-QUICKANNO.MODES',
      list: [],
    };
    for (const [id, name] of ['TOOL-QUICKANNO.MODE-ONE', 'TOOL-QUICKANNO.MODE-TWO', 'TOOL-QUICKANNO.MODE-THREE'].entries()) {
      modes.list.push({
        type: 'action',
        id: `${id}`,
        name,
        selected: id === this.mode,
      });
    }
    const retval: Array<IMenuListing | IMenuAction> = [items, modes];
    retval.push({
      type: 'action',
      id: 'filter',
      name: 'TOOL-QUICKANNO.FILTER',
      icon: 'filter_list',
    });
    retval.push({
      type: 'action',
      id: 'save',
      name: 'TOOL-QUICKANNO.SAVE',
      icon: 'save',
    });
    this.toolbarMenu = retval;
  }
}

export interface IQueueElement {
  cmd: string;
  data: {
    bid: string;
    [key: string]: unknown;
  };
}
