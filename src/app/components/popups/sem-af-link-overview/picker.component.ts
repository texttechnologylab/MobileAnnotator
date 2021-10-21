import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PickerComponent as semafLinkPickerComponent } from 'src/app/components/popups/sem-af-link-picker/picker.component';

import { defaultAnnotationClasses, IAnnotationClass, FeatureType, Feature, defaultLinkClasses } from '../../tools/sem-af/sem-af.utils';
import { Link } from '../../content/contentholderSemAF/contentholder.component';
import { IContentholderData } from '../../content/contentholder/contentholder.component';
import { IToolElement } from 'src/app/services/interfaces';
import {return_type} from '../sem-af-picker/picker.component'


export function find_id(x: {}, id: number) {
  for (const [key, val] of Object.entries(x)) {
    if (val[id] !== undefined) {
      return val[id]
    }
  }
}




@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
/**
 * Komponente für die Auswahl einer Kategorie des QuickAnnotators
 */
export class PickerComponent implements OnInit {
  public links: Link[];
  public after_closed: (result: {
    [id: string]: any;
    type: return_type;
  }) => void;

  //@Input() links: Link[] = [];
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  /* Function to open the Link picker menu via button*/
  openDialog(link: Link): void {
    const annon = this.data.annoData;

    let thisLink: IToolElement = annon[link.type][link.id]
    //console.log("thisLink", thisLink)



    let dialogRef = this.dialog.open(semafLinkPickerComponent, {
      data: ({
        features: thisLink.features,
        entries: defaultLinkClasses,
        annoData: this.data.annoData,
        text: this.data.text,
        id: link.id,
        thisLink: link,
        after_closed: this.after_closed,
      } as any) as any,
      height: 'inherit',

    });

    dialogRef.afterClosed().subscribe((x) => {
      console.log("xxx",x)
      if(x == null) this.dialogRef.close({ type: return_type.do_nothing })
      else if (x.type == return_type.remove_selected_link) {
        this.dialogRef.close({ type: return_type.do_nothing })
      }
      else if (x.type == return_type.selected_ref || x.type == return_type.selected_ref_multi) {
        this.dialogRef.close(x)
      }
    });

  }




  

  public ngOnInit(): void {

    
    const { links, after_closed } = this.data;
    console.log("**************", this.data[0]); //links
    this.links=links as any ;
  


    this.after_closed = after_closed;

    this.dialogRef.disableClose = true;//disable default close operation
    this.dialogRef.backdropClick().subscribe(result => {
      //this.gather();
      this.dialogRef.close({ type: return_type.do_nothing });
    });


  }







  public getBackground(entry: IContentholderData): string {

    const val = defaultAnnotationClasses.find((x) => x.type == entry.data._type);
    return (val === undefined) ? "#fff" : val.rgb;
  }



}


interface IPickerEntryData {
  name: string;
  rgb?: string;
  concept: boolean;
}


