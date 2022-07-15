import {Component} from '@angular/core';
import {createTableStuffFrom, Table, TableStuff} from "./table/table-stuff";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-example';

  private readonly myTableData: Table = {
    rows: [
      {
        cells: [
          {
            text: 'a'
          },
          {
            text: 'b'
          },
          {
            text: 'c'
          },
          {
            text: 'd'
          },
        ]
      },
      {
        cells: [
          {
            text: 'z'
          },
          {
            text: 'y'
          },
          {
            text: 'x'
          },
          {
            text: 'w'
          },
          {
            text: 'v'
          },
          {
            text: 'u'
          }
        ]
      },
      {
        cells: [
          {
            text: 'q'
          },
          {
            text: 'w'
          },
          {
            text: 'e'
          },
          {
            text: 'r'
          },
          {
            text: 't'
          },
        ]
      }
    ]
  };

  get tableStuff(): TableStuff {
    return createTableStuffFrom(this.myTableData);
  }
}
