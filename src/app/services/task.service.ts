import { Injectable } from '@angular/core';
import { ITask } from './interfaces';

@Injectable({
  providedIn: 'root'
})
/**
 * Service für die Verwaltung von Aufgaben (Tasks)
 * TODO: Die entsprechende Schnittstelle ist im Backend noch nicht vorhanden
 */
export class TaskService {

  private loadedTasks: ITask[];

  constructor() { }

  public getTasks(): ITask[] {
    if (this.loadedTasks == null) {
      this.loadedTasks = [];
    }
    return this.loadedTasks;
  }

  public setTaskAsDone(taskId: string): void {
    const [task] = this.loadedTasks.filter(({ id }) => id === taskId);
    if (task) {
      task.isDone = true;
    }
  }

  public getTask(taskId: string): ITask {
    const [retval] = this.loadedTasks.filter(({ id }) => id === taskId);
    return retval;
  }

  private getToolTitle(tool: string): string {
    switch (tool) {
      case 'semaf':
        return 'TOOL-SEM-AF.TITLE';
      case 'quickpanel':
        return 'TOOL-QUICKANNO.TITLE';
      case 'nel2panel':
        return 'TOOL-KNOWLEDGEBASE.TITLE';
      default:
        return '';
    }
  }
}
