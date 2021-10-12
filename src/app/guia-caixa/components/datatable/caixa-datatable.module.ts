import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTableDirective, DataTablesModule } from "angular-datatables";
import { DataTableComponent } from "./datatable.component";

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [
    DataTablesModule,
    DataTableComponent
  ]
})
export class CaixaDatatableModule { }
