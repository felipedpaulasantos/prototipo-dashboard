import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutComponent } from "./layout.component";
import { TipografiaComponent } from "./tipografia/tipografia.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    data: {
      title: "Layout",
      breadcrumb: "Layout"
    }
  },
  {
    path: "tipografia",
    component: TipografiaComponent,
    data: {
      title: "Tipografia",
      breadcrumb: "Tipografia"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
