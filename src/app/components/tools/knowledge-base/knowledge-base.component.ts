import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ITool } from 'src/app/services/interfaces';
import { DocumentService } from 'src/app/services/document.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, PartialObserver } from 'rxjs';
import { IContentholderData, IContentholderAnnotation } from '../../content/contentholder/contentholder.component';
import { getAnnotation, fingerprintType, IFingerprint, ttEntityType, knowledgeType, tokenType, getTypedAnnotation } from '../utils';
import { IQueueElement } from '../quick-anno/quick-anno.component';
import { FilterComponent } from '../../popups/filter/filter.component';
import {
  getColorCoding,
  ISourceData,
  getImage,
  getDataUrls,
  IDetailData,
  handleDataRequest,
  dataSources,
  TextTechnologyEntity,
  createRemoveKnowledgeQueue,
  addChildData
} from './knowledge-base.utils';
import { HttpClient } from '@angular/common/http';
import { MatTable } from '@angular/material/table';
import { KnowledgePickerComponent, ISearchResult } from './knowledge-picker/knowledge-picker.component';
import { IMenuAction, IMenuListing, returnEventId } from '../../menu/tool-bar/tool-bar.component';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
/**
 * Komponente für die Darstellung des KnowledgeBaseLinker Werkzeuges
 */
export class KnowledgeBaseComponent implements OnInit, OnDestroy {

  public data: IContentholderData[] = [];
  public annoData: { [id: string]: IContentholderAnnotation } = {};
  public pageSizes = [35, 60, 100, 150, 250];
  public pageSize = this.pageSizes[0];
  public activeFilterRaw: string[] = [];
  public activeFilters: string[] = [];
  public selectedElement: IContentholderData;
  public expandedElement: ISourceData;
  public annotationDataSource: ISourceData[] = [];

  public readonly columns = ['icon', 'source'];
  public toolbarMenu: Array<IMenuAction | IMenuListing> = [];

  private casId: string;
  private viewId: string;
  private tool: ITool;
  private subscriptions: Subscription[] = [];
  private fingerprints = new Map<string, IFingerprint>();
  private detailMap = new Map<number, IDetailData>();
  private entityMap = new Map<string, TextTechnologyEntity>();
  private lastSource: string;

  @ViewChild(MatTable, { static: true }) table: MatTable<ISourceData>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private menuService: MenuService,
    private documentService: DocumentService,
    private websocketService: WebsocketService,
    public dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.menuService.hideMenubar();
    this.generateData();
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

    // Auf Änderungen des Dokuments reagieren
    const changeObserver: PartialObserver<void> = {
      next: () => {
        this.generateData();
        this.generateAnnotationDataSource();
      },
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
   * Navigiere zur Dokumenten Ansicht
   */
  public navigateDocument(): void {
    this.router.navigate(['document'], { queryParams: { cas: this.casId, view: this.viewId } });
  }

  /**
   * Ändere die Anzahl der pro Seite dargestellten Token
   */
  public changePageSize(num: number): void {
    this.pageSize = num;
  }

  /**
   * Öffnen den Filter Dialog und aktualisiere die Filterung
   */
  public openFilterSelection(): void {
    const filterData = {
      type: 'single',
      data: Object.entries(dataSources).map(([name, { color }]) => ({ name, rgb: color, type: name }))
    };

    const filter = this.dialog.open(FilterComponent, {
      data: [filterData, this.activeFilterRaw],
      height: 'inherit'
    });
    filter.afterClosed().subscribe((result: Set<string>) => {
      if (result) {
        this.activeFilterRaw = Array.from(result);
        const toAdd: string[] = [];

        // Ergänze sämtliche Sprachen für die gewählten Filter
        if (result.has('Wikipedia')) {
          toAdd.push(...['Wikipedia DE', 'Wikipedia EN', 'Wikipedia FR', 'Wikipedia ES']);
        }
        if (result.has('Babelfy')) {
          toAdd.push(...['Babelfy DE', 'Babelfy EN']);
        }
        if (result.has('Wiktionary')) {
          toAdd.push(...['Wiktionary DE', 'Wiktionary EN', 'Wiktionary FR', 'Wiktionary ES']);
        }

        for (const add of toAdd) {
          result.add(add);
        }
        this.activeFilters = Array.from(result);
      }
    });
  }

  /**
   * Markiere ein Token als ausgewähltes Element
   */
  public tokenSelect(data: IContentholderData): void {
    if (!this.selectedElement || !data || this.selectedElement.id !== data.id) {
      this.selectedElement = data;
      this.generateAnnotationDataSource();
    }
  }

  /**
   * Speichere die Änderungen am Dokument
   */
  public saveCas(): void {
    this.documentService.saveCas(this.casId);
  }

  /**
   * Erzeuge ein Multitoken zwischen den im Tupel übergebenen IDs
   */
  public createMultiToken([fstId, sndId]: [string, string]): void {
    const from = this.entityMap.get(fstId);
    const to = this.entityMap.get(sndId);
    if (!from || !to) {
      // IDs waren ungültig
      return;
    }

    // Bestimmte den Textabschnitt, der als Multitoken zusammengefasst werden soll
    const begin = Math.min(+from.features.begin, +from.features.begin);
    const end = Math.min(+to.features.end, +to.features.end);
    //console.log('coords', begin, end);

    const possibles = Object.values(this.tool.toolElements[ttEntityType]).map((entry) => getTypedAnnotation<TextTechnologyEntity>(entry));
    const children: TextTechnologyEntity[] = [];
    //console.log('possibles', possibles);

    for (const entry of possibles) {
      if (!entry) {
        continue;
      }
      if (+entry.features.begin >= begin && +entry.features.end <= end) {
        children.push(entry);
      }
    }
    //console.log('children', children);

    const queue: IQueueElement[] = [];
    // Entferne alle Annotationen der bisherigen Tokens
    for (const child of children) {
      queue.push(...createRemoveKnowledgeQueue(child, queue.length));

      // Entferne bisherige Tokens und erzeuge das Multitoken
      queue.push({
        cmd: 'remove',
        data: {
          bid: `_b${queue.length}_`,
          addr: `${child._addr}`,
        }
      });
    }

    queue.push({
      cmd: 'create',
      data: {
        bid: `_b${queue.length}_`,
        features: {
          begin,
          end,
        },
        _type: ttEntityType,
      },
    });

    this.sendBatch(queue);
  }

  /**
   * Löse ein Multitoken wieder in einzelne Tokens auf
   */
  public removeMultiToken(id: string): void {
    const ttEntity = this.entityMap.get(id);
    if (!ttEntity || !ttEntity.features.children) {
      // ID ungültig oder der Eintrag ist kein Multitoken
      return;
    }

    // Entferne die Annotationen des Multitoken
    const queue = createRemoveKnowledgeQueue(ttEntity);

    // Entferne das Multitoken
    queue.push({
      cmd: 'remove',
      data: {
        bid: `_b${queue.length}_`,
        addr: id,
      }
    });

    // Stelle die einzelnen Token wieder her
    for (const child of ttEntity.features.children) {
      const token = getAnnotation(this.tool.toolElements[tokenType][child]);
      if (!token) {
        continue;
      }
      queue.push({
        cmd: 'create',
        data: {
          bid: `_b${queue.length}_`,
          features: {
            begin: `${token.features.begin}`,
            end: `${token.features.end}`,
          },
          _type: ttEntityType,
        }
      });
    }

    this.sendBatch(queue);
  }

  /**
   * Ob ein Eintrag der Annotationsliste aufgeklappt ist oder nicht
   */
  public isExpanded(idx: number, row: ISourceData): boolean {
    return this.expandedElement && row.source === this.expandedElement.source && row.identifier === this.expandedElement.identifier;
  }

  /**
   * Klappe den Eintrag der Annotationsliste auf falls er geschlossen ist, oder schließe ihn anderenfalls
   */
  public expand(row: ISourceData): void {
    if (this.expandedElement && row.source === this.expandedElement.source && row.identifier === this.expandedElement.identifier) {
      this.expandedElement = undefined;
    } else {
      this.expandedElement = row;
    }
    this.table.renderRows();
  }

  /**
   * Reagiere auf die Auswahl eines Kontextmenü Eintrages der Toolbar
   */
  public onMenuSelect(data: string[]): void {
    const [id] = data;
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
        if (this.pageSizes.some((size) => size === num)) {
          this.pageSize = num;
          this.genearteToolbarMenu();
        }
        break;
    }
  }

  /**
   * Lade die Daten des Eintrags der Annotationsliste
   */
  private fillExpansionData(data: ISourceData): void {
    if (this.detailMap.has(data.addr)) {
      // Fall: die Daten wurden bereits einmal geladen
      data.extended = this.detailMap.get(data.addr);
    } else {
      // Fall: die Daten müssen neu angefragt werden
      const extend: IDetailData = {
        image: '',
        label: '',
        text: '',
      };
      for (const [dataType, dataUrl, method] of getDataUrls(data.source as string, data.identifier as string)) {
        const observer: PartialObserver<unknown> = {
          next: (res) => handleDataRequest(dataType, data.source, res, extend),
        };
        if (method === 'jsonp') {
          this.http.jsonp(dataUrl, 'callback').subscribe(observer);
        } else if (method === 'get') {
          this.http.get(dataUrl).subscribe(observer);
        }
      }
      this.detailMap.set(data.addr, extend);
      data.extended = extend;
    }
  }

  private generateAnnotationDataSource() {
    const selected = this.selectedElement;
    const annoData: ISourceData[] = [];
    if (selected != null && Array.isArray(selected.data.features.knowledgeEntries)) {

      for (const entry of selected.data.features.knowledgeEntries) {
        const knowledge = getAnnotation(this.tool.toolElements[knowledgeType][entry]);
        if (!knowledge) {
          continue;
        }
        const data: ISourceData = {
          addr: knowledge._addr,
          userAnnotation: this.fingerprints.has(`${knowledge._addr}`),
          source: knowledge.features.source as string,
          identifier: knowledge.features.identifier as string,
          reference: knowledge.features.reference as string,
          icon: getImage(knowledge.features.source as string),
          rgb: 'black',
        };
        this.fillExpansionData(data);
        data.rgb = getColorCoding(data.source);
        annoData.push(data);

      }
    }
    this.annotationDataSource = annoData;
  }

  /**
   * Entferne eine Annotation
   */
  public removeAnnotation(data: ISourceData) {
    const elem = this.selectedElement.data;
    const entries = elem.features.knowledgeEntries;
    if (!entries || !Array.isArray(entries) || !entries.some((e) => e === data.addr)) {
      return;
    }
    const queue: IQueueElement[] = [{
      cmd: 'remove',
      data: {
        addr: `${data.addr}`,
        bid: '_bid0_',
      }
    },
    {
      cmd: 'edit',
      data: {
        addr: `${elem._addr}`,
        bid: '_bid1_',
        features: {
          knowledgeEntries: entries.filter((e) => e !== data.addr),
        }
      }
    }];
    this.sendBatch(queue);
  }

  /**
   * Erstelle eine Annotation über den Auswahl Dialog
   */
  public createAnnotation() {
    const selected = this.selectedElement;
    const observer: PartialObserver<[ISearchResult, string]> = {
      next: (res) => {
        if (!res) {
          return;
        }
        const [{ identifier, reference }, source] = res;
        if (!identifier || !reference || !source) {
          return;
        }
        this.lastSource = source;

        const queue: IQueueElement[] = [{
          cmd: 'create',
          data: {
            bid: '_b0_',
            features: {
              identifier,
              reference,
              source,
            },
            _type: knowledgeType,
          }
        },
        {
          cmd: 'append_array',
          data: {
            bid: '_b1_',
            addr: selected.id,
            featureAddr: '_b0_',
            featureName: 'knowledgeEntries'
          }
        }];
        this.sendBatch(queue);
      }
    };
    const picker = this.dialog.open(KnowledgePickerComponent, {
      data: { text: this.selectedElement.label, label: this.lastSource },
      height: 'inherit'
    });
    picker.afterClosed().subscribe(observer);
  }

  private sendBatch(queue: IQueueElement[]) {
    this.websocketService.send({
      cmd: 'work_batch',
      data: {
        casId: this.casId,
        options: [{ privateSession: false }],
        queue,
        toolName: 'nel2panel',
        view: this.viewId,
      }
    });
  }

  /**
   * Verarbeite die geladenen Daten für die Darstellung innerhalb des Werkzeuges
   */
  private generateData() {
    this.tool = this.documentService.currentTool;
    if (!this.tool || !this.documentService.currentCAS) {
      // Keine Daten geladen
      return;
    }
    const text = this.documentService.currentCAS.text;
    const ttEntities = Object.values(this.tool.toolElements[ttEntityType] || {})
      .map((e) => getAnnotation(e)) as TextTechnologyEntity[];
    const tokens = Object.values(this.tool.toolElements[tokenType] || {})
      .map((e) => getAnnotation(e));

    addChildData(ttEntities, tokens);
    const data: IContentholderData[] = [];
    const annotations: { [id: string]: IContentholderAnnotation } = {};

    for (const fingerprint of Object.values(this.tool.toolElements[fingerprintType] || {})) {
      const elem = getTypedAnnotation<IFingerprint>(fingerprint);
      if (!elem) {
        continue;
      }
      // Merke dir Fingerprints für Bestimmung von manuell getätigten Annotationen
      this.fingerprints.set(`${elem.features.reference}`, elem);
    }

    for (const ttEntity of ttEntities) {
      if (!ttEntity) {
        continue;
      }
      const id = `${ttEntity._addr}`;
      this.entityMap.set(id, ttEntity);
      const chData: IContentholderData = {
        label: text.slice(ttEntity.features.begin, ttEntity.features.end),
        id,
        data: ttEntity,
      };
      if (this.selectedElement != null && this.selectedElement.id === chData.id) {
        this.selectedElement = chData;
      }
      data.push(chData);

      // Ergänze die KnowledgeBaseLinker Annotationen
      const knowledgeEntries = ttEntity.features.knowledgeEntries;
      if (knowledgeEntries != null && Array.isArray(knowledgeEntries)) {
        for (const entryId of knowledgeEntries) {
          const entryAddr = `${entryId}`;
          const entry = getAnnotation(this.tool.toolElements[knowledgeType][entryAddr]);
          if (entry == null) {
            continue;
          }
          if (!annotations[ttEntity._addr]) {
            annotations[ttEntity._addr] = {
              rgb: [],
              badge: 0,
              ref: `${ttEntity._addr}`,
              annotations: {},
            };
          }
          const annoData = annotations[ttEntity._addr];
          const type = entry.features.source as string;
          const color = getColorCoding(type);
          if (color) {
            annoData.rgb.push(color);
          }

          if (!annoData.annotations[type]) {
            annoData.annotations[type] = [];
          }
          annoData.annotations[type].push({ id: entryAddr, fp: this.fingerprints.has(entryAddr) });
          if (this.fingerprints.has(entryAddr)) {
            ++annoData.badge;
          }
        }
      }
    }

    this.data = data.sort((a, b) => a.data.features.begin - b.data.features.begin);
    this.annoData = annotations;
  }

  /**
   * Befülle das Kontextmenü der Toolbar
   */
  private genearteToolbarMenu() {
    const items: IMenuListing = {
      type: 'listing',
      id: 'items',
      name: 'TOOL-KNOWLEDGEBASE.ITEMS',
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
    const retval: Array<IMenuListing | IMenuAction> = [items];
    retval.push({
      type: 'action',
      id: 'filter',
      name: 'TOOL-KNOWLEDGEBASE.FILTER',
      icon: 'filter_list',
    });
    retval.push({
      type: 'action',
      id: 'save',
      name: 'TOOL-KNOWLEDGEBASE.SAVE',
      icon: 'save',
    });
    this.toolbarMenu = retval;
  }

}
