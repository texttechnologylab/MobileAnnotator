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
  public selected: string =null;
  public shapenet_url = location.protocol === "https:" ? 'https://m6ytspuafdw.hopto.org/shapenet' : 'http://shapenet.texttechnologylab.org';

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<string>,
    @Inject(MAT_DIALOG_DATA) public data: {term: string, id: string},) { }

  ngOnInit() {
    const {term, id} = this.data
    this.input = term;
    this.selected = id;
    this.search.pipe(distinctUntilChanged((a, b) => a === b)).subscribe({
      next: async (v) => {
        //console.log(`observerA: ${v}`)
        const copy = this.cur + 1;
        this.cur += 1;
        this.searchResult = null

        try {
          const url = `${this.shapenet_url}/search?search=`


          // We use force-cache to not put undue stress on the fragile servers :)
          const result: ShapeNetSearchResult = await (await fetch(url + encodeURIComponent(v), { cache: "force-cache" })).json()
          //console.log("Result: ", result);
          if (this.cur > copy) return // ensure that the newest result is used
          this.searchResult = result

          this.searchJson = JSON.stringify(result, null, 4)
          

        } catch (error) {
          if (this.cur > copy) return
          this.searchResult = { results: [], term: v, success: false }
        }




      }
    });
    this.search.next(term)
  }

  public change_input(a: any) {
    //console.log("change_input",a,this.input)
    this.search.next(this.input)
  }

  public set_shapenet(id:string) {
    
    console.log("shapenet test", id);
    this.selected = id;
    this.dialogRef.close({id: id})
    
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