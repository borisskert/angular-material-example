import {Component} from '@angular/core';
import {createTableStuffFrom, TableStuff} from "./table/table-stuff";
import {Table} from "./input";
import {createGridFrom, GridStuff} from "./grid/grid-stuff";

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
        type: 'row',
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
        type: 'line',
        text: 'qwerty',
      },
      {
        type: 'row',
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
        type: 'row',
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

  get gridStuff(): GridStuff {
    return createGridFrom(this.myTableData);
  }
}
