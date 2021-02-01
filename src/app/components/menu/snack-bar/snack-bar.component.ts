import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { IMessage } from 'src/app/services/interfaces';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
/**
 * Komponente für die Anzeige von Informations- und Fehlermeldungen
 */
export class SnackBarComponent implements OnInit {

  public iconMap = {
    error: 'error',
    info: 'info',
    warning: 'warning',
    success: 'done',
  };

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) private data: IMessage,
  ) { }

  public displayMessage: IMessage;

  public ngOnInit(): void {
    this.displayMessage = this.data;
  }

}
