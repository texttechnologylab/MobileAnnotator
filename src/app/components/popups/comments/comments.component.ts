import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartialObserver } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
/**
 * Komponente für den Kommentar Dialog des QuickAnnotators
 */
export class CommentsComponent implements OnInit {

  public displayData: ICommentData[] = [];
  public commentText = '';

  constructor(
    public dialogRef: MatDialogRef<CommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICommentData[],
    private userservice: UserService,
  ) { }

  public ngOnInit(): void {
    const display: ICommentData[] = [];
    for (const { label, user, create } of this.data.sort((a, b) => b.create - a.create)) {
      const idx = display.length;

      // Benutzer Namen müssen async geladen werden
      const observer: PartialObserver<{ result: { description: string } }> = {
        next: (result) => {
          display[idx].user = result.result.description;
        }
      };
      display.push({
        label,
        create,
        user: 'POPUP-COMMENTS.USER-LOADING',
      });
      this.userservice.getUserInfo(user).subscribe(observer);
    }
    this.displayData = display;
  }

  /**
   * Neuen Kommentar absenden
   */
  public submit(): void {
    this.dialogRef.close(this.commentText);
  }

}

export interface ICommentData {
  label: string;
  user: string;
  create: number;
}
