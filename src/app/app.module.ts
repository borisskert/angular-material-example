import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {TableComponent} from './table/table.component';
import {GridComponent} from './grid/grid.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { HtmlTableComponent } from './html-table/html-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    GridComponent,
    HtmlTableComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
