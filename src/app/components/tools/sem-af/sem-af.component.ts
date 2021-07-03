import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService, } from 'src/app/services/document.service';
import { ITool, IToolElement } from 'src/app/services/interfaces';
import { IContentholderData, IContentholderAnnotation, Link, LabelAndId } from '../../content/contentholderSemAF/contentholder.component';
import { PickerComponent } from '../../popups/sem-af-picker/picker.component';
import { IAnnotationClass, defaultAnnotationClasses, defaultLinkClasses } from './sem-af.utils';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Subscription, PartialObserver } from 'rxjs';
import { FilterComponent } from '../../popups/filter/filter.component';
import { getAnnotation, quickTreeType, commentType, IFingerprint, fingerprintType, getTypedAnnotation } from '../utils';
import { CommentsComponent, ICommentData } from '../../popups/comments/comments.component';
import { IMenuListing, IMenuAction, returnEventId } from '../../menu/tool-bar/tool-bar.component';

import { return_type } from '../../popups/sem-af-picker/picker.component'
import { MatSnackBar } from '@angular/material';

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
  public new_link: IAnnotationClass;
  public help_text = "Hello There";
  public link_start_end: number[] = null;
  public pageSizes = [35, 60, 100, 150, 250];
  public pageSize = this.pageSizes[3];
  public activeFilters: string[] = [];
  public selectedAnnotation: IAnnotationClass;
  public toolbarMenu: Array<IMenuAction | IMenuListing> = [];

  public links: Link[];

  private casId: string;
  private viewId: string;
  private tool: ITool;

  public selected_reference: {
    feature_name: any;
    addr: any;
  } = null;

  public selected_reference_multi: {
    feature_name: any;
    addr: any;
    current_ids: number[];
  } = null;


  private subscriptions: Subscription[] = [];
  private lastAnnations: IAnnotationClass[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService,
    private documentService: DocumentService,
    private websocketService: WebsocketService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
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

  public select_link(id: number) {
    console.log(`Link Selected: ${id}`)


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

    if (this.selected_reference !== null) {
      const st: string = this.selected_reference.feature_name;
      const feature = {};
      feature[st] = data.id
      this.activeFilters = [];
      console.log("feature: ", feature, data)


      this.update_feature(Number.parseInt(this.selected_reference.addr), feature);
      this.selected_reference = null;
      return;
    }


    else if (this.selected_reference_multi !== null) {
      const st: string = this.selected_reference_multi.feature_name;
      const feature = {};
      this.selected_reference_multi.current_ids.push(data.id)
      feature[st] = this.selected_reference_multi.current_ids;
      this.activeFilters = [];
      console.log("feature: ", feature, data)


      this.update_feature(Number.parseInt(this.selected_reference_multi.addr), feature);
      this.selected_reference_multi = null;
      return;
    }

    if (this.link_start_end !== null) {

      console.log("HIIIII")
      const id = data.id;
      if (id === undefined) return;

      this.link_start_end.push(id)
      this.help_text = `Select End for ${this.new_link.name}`;
      if (this.link_start_end.length == 2) {
        console.log("start_end:", JSON.stringify(this.link_start_end, null, 4))
        const [a, b] = this.link_start_end
        this.createLink(this.new_link.type, a, b)

        this.link_start_end = null;
        this.help_text = null;

      }
      return;
    }

    {

      // Modus: Einzelne Annotation (Auswahl der Kategorie über einen Popup Dialog)
      console.log("data.data.features", data.data.features)
      const picker = this.dialog.open(PickerComponent, {
        data: {
          features: data.data.features,
          entries: defaultAnnotationClasses,
          last: this.lastAnnations,
          highlights: data.data._type,
          annoData: this.tool.toolElements,
          text: this.documentService.currentCAS.text,
          links: this.links,
          id: data.id
        },
        height: 'inherit',

      });
      picker.afterClosed().subscribe((result: { type: return_type, [id: string]: any }) => {
        console.log("CLOSED!")
        var new_features;


        if (result) {
          if (result.type == return_type.change_attribute) {
            {
              if (Object.entries(result.data).length == 0) return;
              const addr = data.id;
              this.update_feature(addr, result.data)
            }
          } else if (return_type.selected == result.type) {
            this.selectedAnnotation = result.entry;
            new_features = result.features; 

            const queue = [this.removeallAnnotations(data.id),this.createAnnotation(data)]
            this.sendBatch(queue)
          }
          else if (return_type.selected_after == result.type) {
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
          else if (return_type.selected_ref == result.type) {
            const addr = data.id;
            console.log("resxx", result)
            this.selected_reference = { feature_name: result.feature_name, addr: addr }
            if (result.allowed_type !== null) {
              this.activeFilters = result.allowed_type;
            }
            {
              if (Object.entries(result.data).length == 0) return;
              this.update_feature(addr, result.data)
            }
          }
          else if (return_type.selected_ref_multi == result.type) {
            const addr = data.id;
            console.log("resxx", result)
            this.selected_reference_multi = { feature_name: result.feature_name, addr: addr, current_ids: result.current_ids }
            if (result.allowed_type !== null) {
              this.activeFilters = result.allowed_type;
            }
            {
              if (Object.entries(result.data).length == 0) return;
              this.update_feature(addr, result.data)
            }
          }

          else if (return_type.add_link == result.type) {
            const link = result.entry as IAnnotationClass;
            console.log("link:   a", link);
            this.link_start_end = [data.id];
            this.snackBar.open(`Select End for ${link.name}`,null,{ duration: 2000,})
            this.new_link = link;
          }
          else if(return_type.remove_selected == result.type){ 
            const {begin, end} = result.features
            console.log("data{{{{",data)
            const queue: IQueueElement[] = [
              {
                cmd: 'remove',
                data: {
                  bid: '_b0_',
                  addr: `${data.id}`,
                }
              },
              {
              cmd: 'create',
              data: {
                bid: '_b1_',
                features: {begin: begin, end: end},
                _type: "org.texttechnologylab.annotation.semaf.isobase.Entity",
              }
            }];

            this.sendBatch(queue);
          }







        }
      });

    }
  }

  public changePageSize(num: number): void {
    this.pageSize = num;
  }



  public openFilterSelection(): void {
    const filterData = {
      type: 'multi',
      data: { 'POPUP-FILTER.ANNOTATION-LABEL': defaultAnnotationClasses },
    };

    const filter = this.dialog.open(FilterComponent, {
      data: [filterData, this.activeFilters],
      height: 'inherit'
    });
    filter.afterClosed().subscribe((result) => {
      if (result) {
        this.activeFilters = Array.from(result);
        console.log(this.activeFilters)
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
        }
    }
  }

  /**
   * Verarbeite die geladenen Daten für die Darstellung innerhalb des Werkzeuges
   */
  private generateData(): void {
    this.tool = this.documentService.currentTool;
    const text = this.documentService.currentCAS.text;
    const tokens = this.tool.toolElements["org.texttechnologylab.annotation.semaf.isobase.Entity"] || {};
    const data: IContentholderData[] = [];


    const types = [...defaultAnnotationClasses];


    const annon_types = defaultAnnotationClasses.map((x) => x.type);
    annon_types.push('org.texttechnologylab.annotation.semaf.isobase.Entity')

    for (const item of annon_types) {
      for (const token_ of Object.values(this.tool.toolElements[item] || {})) {
        if(Object.values(token_).length == 0) continue;
        const token = token_ as IToolElement;
        const { begin, end } = token.features;
        
        data.push({
          label: (begin !== end) ? text.slice(begin, end) : "∅",
          id: token._addr,
          data: {
            _addr: null,
            _type: token._type,
            features: token.features
          },
        });
      }
    }







    this.data = data.sort((a, b) => a.data.features.begin - b.data.features.begin);

    const find_id = (id: number) => {
      if (id === null || id == undefined) return null;
      const [cc] = Object.values(this.tool.toolElements).map((val) => val[id]).filter((x) => x !== undefined)
      return cc as IToolElement
    }

    /**
     * The following lines convert this.tool.toolElements to Link[]
     * so they extract all links and save them in this.links
     */
    const link_types = [...defaultLinkClasses];
    this.links = []
    for (const { type, rgb } of link_types) {
      // Not all Files need to have all types of links
      // In that case the cas does not contain them

      if (this.tool.toolElements[type] === undefined) continue;

      const links_of_type = Object.values(this.tool.toolElements[type])
      const links: Link[] = links_of_type.map((x) => {
        if (Object.values(x).length == 0) return null;
        const link = x as IToolElement;
        const figure = find_id(link.features["figure"] as number)
        const ground = find_id(link.features["ground"] as number)
        const flabel: IContentholderData = { id: null, label: null, data: null }
        const glabel: IContentholderData = { id: null, label: null, data: null }

        if (figure !== null) {
          flabel.id = figure._addr;
          flabel.label = this.documentService.currentCAS.text.slice(figure.features.begin, figure.features.end)
          flabel.data = figure;
        }
        if (ground !== null) {
          glabel.id = ground._addr;
          glabel.label = this.documentService.currentCAS.text.slice(ground.features.begin, ground.features.end)
          glabel.data = ground;
          console.log("ground", ground)
        }
        return {
          id: link._addr,
          type: link._type,
          from: flabel,
          to: glabel,
        }
      })
      this.links = this.links.concat(links);


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
  private createAnnotation(data: IContentholderData): IQueueElement {
    const featues = {
      begin: data.data.features.begin,
      end: data.data.features.end,
    }


    const queue: IQueueElement = {
      cmd: 'create',
      data: {
        bid: '_b0_',
        features: featues,
        _type: this.selectedAnnotation.type,
      }
    };
    return queue;
  }


  private createLink(type: string, start: number, end: number) {
    const queue: IQueueElement = {
      cmd: 'create',
      data: {
        bid: '_b0_',
        features: {
          figure: start,
          ground: end,
        },
        _type: type,
      }
    };
    console.log("queuex:  ", JSON.stringify(queue, null, 4));
    this.sendBatch([queue]);
  }


  /**
   * Remove all annotations
   */
  private removeallAnnotations(addr: string | number): IQueueElement {
    const queue: IQueueElement = {
      cmd: 'remove',
      data: {
        bid: '_b0_',
        addr: `${addr}`,
      }
    };
    return queue
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

    const retval: Array<IMenuListing | IMenuAction> = [items];
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
