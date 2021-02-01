import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Router } from '@angular/router';
import { Observer, PartialObserver, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MenuService } from 'src/app/services/menu.service';
import { IDocument, ICas } from 'src/app/services/interfaces';

@Component({
  selector: 'app-document-select',
  templateUrl: './document-select.component.html',
  styleUrls: ['./document-select.component.scss']
})
/**
 * Komponente für die Ansicht der Dokument Selektion
 */
export class DocumentSelectComponent implements OnInit, OnDestroy {

  public currRootPath: string[] = [];

  public dataSource = new MatTableDataSource([]);
  public isWaiting = false;
  public displayColumns = ['expandable', 'icon', 'text'];

  private subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private documentService: DocumentService,
    private menuService: MenuService,
  ) { }

  public ngOnInit(): void {
    this.openRepository(undefined);
    this.menuService.showMenubar();
  }

  public ngOnDestroy(): void {
    // Beende die momentanen Subscriptions
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  /**
   * Reagiert auf die Anwahl eines Repository Eintrages in der Dokumenten Selektions Ansicht
   */
  public openRepository(elem?: IDocument): void {
    if (elem == null) {
      this.currRootPath.unshift('root');
      this.loadRepository('root');
      return;
    }

    switch (elem.type) {
      case 'repository':
        if (!elem.leaf) {
          this.currRootPath.unshift(elem.id);
          this.loadRepository(elem.id);
        }
        break;

      case 'file':
        this.isWaiting = true;
        const observer: PartialObserver<ICas> = {
          next: (data) => this.navigateToDocument(elem.id),
        };
        this.subscriptions.push(this.documentService.casOpened.subscribe(observer));
        this.documentService.openCAS(elem.id);
        break;
    }
  }

  /**
   * Öffnet in der Dokumenten Ansicht einen Unterordner und lädt dessen Daten
   */
  public loadRepository(id: string): void {
    this.isWaiting = true;

    const documentObserver: Observer<IDocument[]> = {
      next: (data) => {
        this.dataSource = new MatTableDataSource<IDocument>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isWaiting = false;
      },
      error: (err) => {
        this.isWaiting = false;
      },
      complete: () => { },
    };
    this.documentService.getDocuments(id).subscribe(documentObserver);
  }

  /**
   * Navigiert in der Dokumenten Selektions Ansicht einen Schritt zurück
   */
  public closeRepository(): void {
    this.currRootPath.shift();
    this.loadRepository(this.currRootPath[0]);
  }

  /**
   * Navigiere zur Dokumenten Ansicht
   */
  public navigateToDocument(id: string): void {
    this.router.navigate(['/document'], { queryParams: { cas: id } });
  }

  /**
   * Gibt den Icon Namen für den jeweiligen Repository Eintrag zurück
   */
  public getIconForType(type: string): string {
    switch (type) {
      case 'repository':
        return 'folder';
      case 'file':
        return 'description';
      default:
        return '';
    }
  }
}
