import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentService } from 'src/app/services/document.service';
import { PartialObserver, Subscription } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { TaskService } from 'src/app/services/task.service';
import { ICas, ITool } from 'src/app/services/interfaces';

@Component({
  selector: 'app-load-progress',
  templateUrl: './load-progress.component.html',
  styleUrls: ['./load-progress.component.scss']
})
/**
 * Diese Komponente stellt sicher, dass beim Öffnen eines Werkzeuges alle dafür nötigen Daten geladen wurden
 */
export class LoadProgressComponent implements OnInit, OnDestroy {

  public loadStatus: ILoadData<[string, string]> = {
    casId: ['MENU-LOAD-PROGRESS.CAS-PENDING', ''],
    view: ['MENU-LOAD-PROGRESS.VIEW-PENDING', ''],
    toolId: ['MENU-LOAD-PROGRESS.TOOL-PENDING', ''],
  };

  private subscriptions: Subscription[] = [];

  constructor(
    public dialogRef: MatDialogRef<LoadProgressComponent>,
    private menuServie: MenuService,
    private documentService: DocumentService,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: ILoadData<string>,
  ) { }

  public ngOnInit(): void {
    this.dialogRef.disableClose = true;

    if (!this.data.casId) {
      this.close(false);
      return;
    }

    const { casId, view, toolId, task } = this.data;

    // Stell sicher, dass das Dokument geladen ist
    const casObserver: PartialObserver<ICas> = {
      next: () => {
        this.loadStatus.casId = ['MENU-LOAD-PROGRESS.CAS-LOADED', 'check'];
        if (view) {
          this.loadStatus.view = ['MENU-LOAD-PROGRESS.LOAD-VIEW', 'get_app'];
          this.documentService.openView(casId, view);
        } else {
          this.menuServie.showMessage({
            text: 'MENU-LOAD-PROGRESS.LOAD-ERROR-VIEW',
            level: 'error',
          });
          this.close(false);
        }
      },
      error: () => {
        this.menuServie.showMessage({
          text: 'MENU-LOAD-PROGRESS.LOAD-ERROR-CAS',
          level: 'error',
        });
        this.close(false);
      }
    };
    this.subscriptions.push(this.documentService.casOpened.subscribe(casObserver));

    // Stell sicher, dass die View geladen ist
    const viewObserver: PartialObserver<{ casId: string, view: string }> = {
      next: () => {
        this.loadStatus.view = ['MENU-LOAD-PROGRESS.VIEW-LOADED', 'check'];
        if (toolId) {
          this.loadStatus.toolId = ['MENU-LOAD-PROGRESS.LOAD-TOOL', 'get_app'];
          this.documentService.openTool(casId, view, toolId);
        } else {
          this.menuServie.showMessage({
            text: 'MENU-LOAD-PROGRESS.LOAD-ERROR-TOOL',
            level: 'error',
          });
          this.close(false);
        }
      },
      error: () => {
        this.menuServie.showMessage({
          text: 'MENU-LOAD-PROGRESS.LOAD-ERROR-VIEW',
          level: 'error',
        });
        this.close(false);
      }
    };
    this.subscriptions.push(this.documentService.viewOpened.subscribe(viewObserver));

    // Stell sicher, dass das Dokument mit dem Werkzeug bearbeitet werden kann
    const toolObserver: PartialObserver<ITool> = {
      next: () => {
        this.loadStatus.toolId = ['MENU-LOAD-PROGRESS.TOOL-LOADED', 'check'];
        if (task) {
          this.taskService.getTask(task);
        }
        this.close(true);
      },
      error: () => {
        this.menuServie.showMessage({
          text: 'MENU-LOAD-PROGRESS.LOAD-ERROR-TOOL',
          level: 'error',
        });
        this.close(false);
      }
    };
    this.subscriptions.push(this.documentService.toolOpened.subscribe(toolObserver));

    this.loadStatus.casId = ['MENU-LOAD-PROGRESS.LOAD-CAS', 'get_app'];
    this.documentService.openCAS(this.data.casId);
  }

  public ngOnDestroy(): void {
    // Beende die momentanen Subscriptions
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  /**
   * Schließt den Dialog
   */
  public close(bool: boolean): void {
    this.dialogRef.close(bool);
  }
}

interface ILoadData<T> {
  casId?: T;
  view?: T;
  toolId?: T;
  task?: T;
}
