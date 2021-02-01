import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ITask, IUserData } from 'src/app/services/interfaces';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { DocumentService } from 'src/app/services/document.service';
import { TaskService } from 'src/app/services/task.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToolService } from 'src/app/services/tool.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
/**
 * Komponente für die Darstellung des Anwender Dashboards (der "Startseite")
 */
export class DashboardComponent implements OnInit {

  public userData: IUserData | undefined;
  public dataSource: MatTableDataSource<ITask>;
  public displayColumns = ['label', 'done'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private userservice: UserService,
    private documentservice: DocumentService,
    private router: Router,
    private menuService: MenuService,
    private taskService: TaskService,
    private toolService: ToolService,
  ) { }

  public ngOnInit(): void {
    this.userData = this.userservice.user;
    this.menuService.showMenubar();
    this.dataSource = new MatTableDataSource<ITask>(this.taskService.getTasks().filter(({ isDone }) => !isDone));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Navigiere zur Dokumenten Ansicht
   */
  public navigateToDocument(): void {
    const queryParams: { cas?: string, view?: string } = {};
    if (this.documentservice.currentCAS) {
      queryParams.cas = this.documentservice.currentCAS.casId;
      if (this.documentservice.currentView) {
        queryParams.view = this.documentservice.currentView.view;
      }
    }

    this.router.navigate(['/document'], { queryParams });
  }

  /**
   * Markiere einen Task als abgeschlossen
   */
  public markTaskAsDone(taskId: string) {
    this.taskService.setTaskAsDone(taskId);
    this.dataSource.data = this.taskService.getTasks().filter(({ isDone }) => !isDone);
  }

  /**
   * Öffne einen Task für die Bearbeitung
   */
  public openTask(taskId: string) {
    const task = this.taskService.getTask(taskId);
    if (!task || task.isDone) {
      return;
    }

    this.toolService.navigateToTool(task.tool, task.cas, task.view, task.id);
  }
}
