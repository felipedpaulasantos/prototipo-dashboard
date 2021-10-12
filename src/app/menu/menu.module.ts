import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

import { HeaderComponent } from "./top-menu/header.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./footer/footer.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { BuscaMenuModule } from "./busca-menu/busca-menu.module";



@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    BuscaMenuModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    PerfectScrollbarModule
  ],
  exports: [
    BuscaMenuModule,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    BreadcrumbComponent
  ]
})
export class MenuModule { }
