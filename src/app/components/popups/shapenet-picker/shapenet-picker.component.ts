import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';



@Component({
  selector: 'app-shapenet-picker',
  templateUrl: './shapenet-picker.component.html',
  styleUrls: ['./shapenet-picker.component.scss']
})
export class ShapenetPickerComponent implements OnInit {

  public search: Subject<string> = new Subject<string>();
  public searchResult: ShapeNetSearchResult;
  public searchJson: string;
  public input: string;
  public cur: number = 0;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<string>,
    @Inject(MAT_DIALOG_DATA) public data: string,) { }

  ngOnInit() {
    this.input = this.data;
    this.search.pipe(distinctUntilChanged((a, b) => a === b)).subscribe({
      next: async (v) => {
        console.log(`observerA: ${v}`)
        const copy = this.cur + 1;
        this.cur += 1;

        try {
          const url = 'http://shapenet.texttechnologylab.org/search?search='



          // We use force-cache to not put undue stress on the fragile servers :)
          const result: ShapeNetSearchResult = await (await fetch('http://shapenet.texttechnologylab.org/search?search=' + encodeURIComponent(v), { cache: "force-cache" })).json()

          if (this.cur > copy) return // ensure that the newest result is used
          this.searchResult = result

          this.searchJson = JSON.stringify(result, null, 4)

        } catch (error) {
          if (this.cur > copy) return
          this.searchResult = { results: [], term: v, success: false }
        }




      }
    });
    this.search.next(this.data)
  }

  public change_input(a: any) {
    //console.log("change_input",a,this.input)
    this.search.next(this.input)
  }

}





// Generated using http://json2ts.com/
export interface Result {
  name: string;
  wnsynset: string;
  wnlemmas: string[];
  solidVolume: string;
  surfaceVolume: string;
  weight: string;
  tags: string[];
  unit: string;
  supportSurfaceArea: string;
  staticFrictionForce: string;
  alignedDims: string;
  id: string;
  categories: string[];
  up: string;
  front: string;
  has_parts: boolean;
  isContainer?: boolean;
}

export interface ShapeNetSearchResult {
  success: boolean;
  term: string;
  results: Result[];
}