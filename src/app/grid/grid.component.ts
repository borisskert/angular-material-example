import {Component, Input, OnInit} from '@angular/core';
import {EMPTY, GridRow, GridStuff} from "./grid-stuff";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() grid: GridStuff = EMPTY;

  constructor() {
  }

  ngOnInit(): void {
  }

  get columns(): number {
    return this.grid.columns;
  }

  get rows(): GridRow[] {
    return this.grid.rows;
  }
}
