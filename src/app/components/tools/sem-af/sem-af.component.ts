import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService, } from 'src/app/services/document.service';
import { ITool, IToolElement } from 'src/app/services/interfaces';
import { IContentholderData, IContentholderAnnotation } from '../../content/contentholder/contentholder.component';
import { PickerComponent } from '../../popups/picker/picker.component';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Subscription, PartialObserver } from 'rxjs';
import { FilterComponent } from '../../popups/filter/filter.component';
import { getAnnotation, quickTreeType, commentType, IFingerprint, fingerprintType, getTypedAnnotation } from '../utils';
import { CommentsComponent, ICommentData } from '../../popups/comments/comments.component';
import { IMenuListing, IMenuAction, returnEventId } from '../../menu/tool-bar/tool-bar.component';

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
  public commentData: { [id: string]: IContentholderAnnotation } = {};
  public pageSizes = [35, 60, 100, 150, 250];
  public pageSize = this.pageSizes[0];
  public mode = 1;
  public activeFilters: string[] = [];
  public toolbarMenu: Array<IMenuAction | IMenuListing> = [];

  private casId: string;
  private viewId: string;
  private tool: ITool;

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService,
    private documentService: DocumentService,
    private websocketService: WebsocketService,
    public dialog: MatDialog,

  ) { }

  public text: string;

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

    // Auf Änderungen des Dokuments reagieren
    const changeObserver: PartialObserver<void> = {
      next: () =>  this.generateData() ,
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



  public changePageSize(num: number): void {
    this.pageSize = num;
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
    this.text = this.documentService.currentCAS.text;
  }





  // not too sure what this does so i did not delete it yet
  private sendBatch(queue: IQueueElement[]): void {
    this.websocketService.send({
      cmd: 'work_batch',
      data: {
        casId: this.casId,
        options: [{ privateSession: false }],
        queue,
        toolName: 'semaf',
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
