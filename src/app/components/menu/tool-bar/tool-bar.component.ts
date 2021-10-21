import { getTreeMultipleDefaultNodeDefsError } from '@angular/cdk/tree';
import { TitleCasePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

export const returnEventId = 'ExitPage';
export const menuRootName = 'root';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
/**
 * Komponente für die Werkzeug spezifische Menüleiste
 */
export class ToolBarComponent implements OnInit {

  /**
   * Array von Menüeinträgen die angezeigt werden sollen
   */
  @Input() menu: Array<IMenuAction | IMenuListing> = [];
  /**
   * Titel, welcher in der Menüleiste dargestellt werden soll
   */
  @Input() title = '';

  @Output() menuEvent = new EventEmitter<string[]>();
  @Output() save = new EventEmitter<void>();
  @ViewChild('mainTrigger', { static: true }) mainTrigger: MatMenuTrigger;
  constructor() { }

  ngOnInit() {
    /*console.log(this.title);*/ 
  }

  /**
   * Schließt das Kontextmenü und emitted den angewählten Eintrag als Event
   */
  public menuAction(id: string[]): void {
    this.mainTrigger.closeMenu();
    this.menuEvent.next(id);
  }

  public openmanual(): void {
    /* Edit if-conditions for the other pages if needed*/
    const path = "/"+document.querySelector("base").href.replace("//","").split("/").slice(1).join("/")+'assets/manual.pdf';
    if (this.title==="TOOL-SEM-AF.TITLE"){
      window.open(path,'_blank');

    }
  }
  /**
   * Emitted das Event, dass der "Zurück" Button gewählt wurde
   */
  public returnEvent(): void {
    this.menuEvent.next([returnEventId]);
  }


}

export interface IMenuAction {
  type: 'action';
  name: string;
  id: string;
  icon?: string;
  selected?: boolean;
}

export interface IMenuListing {
  type: 'listing';
  name: string;
  id: string;
  list: IMenuAction[];
  icon?: string;
}
