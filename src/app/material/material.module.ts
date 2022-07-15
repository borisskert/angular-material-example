import {NgModule} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatGridListModule,
  ],
  exports: [
    MatTableModule,
    MatGridListModule,
  ]
})
export class MaterialModule {
}
