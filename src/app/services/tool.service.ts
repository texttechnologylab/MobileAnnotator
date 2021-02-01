import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IImplementedTool } from './interfaces';

@Injectable({
  providedIn: 'root'
})
/**
 * Service für allgemeine Funktionen der Werkzeuge
 */
export class ToolService {

  /**
   * Liste der in der Anwendung verfügbaren Werkzeuge
   */
  private implementedTools: IImplementedTool[] = [
    { label: 'TOOL-QUICKANNO.TITLE', url: ['/quickanno'], id: 'quickpanel' },
    { label: 'TOOL-KNOWLEDGEBASE.TITLE', url: ['/knowledgebase'], id: 'nel2panel' },
  ];

  constructor(
    private router: Router,
  ) { }

  public get toolSelection() {
    return this.implementedTools;
  }

  /**
   * Navigiere zur Ansicht des übergebenen Werkzeuges
   */
  public navigateToTool(tool: string, cas: string, view: string, task?: string) {
    if (!tool || !cas || !view) {
      return;
    }

    const [data] = this.implementedTools.filter(({ id }) => id === tool);
    if (!data) {
      return;
    }

    this.router.navigate(data.url, { queryParams: { cas, view, task } });
  }
}
