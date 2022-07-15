import {Component, Input, OnInit} from '@angular/core';
import {EMPTY, TableColumn, TableItem, TableStuff} from "./table-stuff";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() stuff: TableStuff = EMPTY

  constructor() {
  }

  ngOnInit(): void {
  }

  get columns(): TableColumn[] {
    return this.stuff.columns;
  }

  get displayedColumns(): string[] {
    return this.columns.map(column => column.name);
  }

  get items(): TableItem[] {
    return this.stuff.items;
  }
}
