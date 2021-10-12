import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PaginasComponent } from "./paginas.component";
import { UploadComponent } from "./upload/upload.component";

const routes: Routes = [
  {
    path: "", component: PaginasComponent
  },
  {
    path: "upload", component: UploadComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
