import {Component, Input, OnInit} from '@angular/core';
import {columnsFrom, EMPTY, Table} from "../input";

@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.scss']
})
export class HtmlTableComponent implements OnInit {

  @Input() table: Table = EMPTY;

  constructor() {
  }

  ngOnInit(): void {
  }

  get columns(): number {
    return columnsFrom(this.table)
  }
}
