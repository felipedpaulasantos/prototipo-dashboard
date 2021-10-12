import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { SharedModule } from "src/app/shared/shared.module";
import { GuiaCaixaModule } from "src/app/guia-caixa/guia-caixa.module";
import { TipografiaComponent } from "./tipografia/tipografia.component";
import { HighlightModule } from "ngx-highlightjs";



@NgModule({
  declarations: [LayoutComponent, TipografiaComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule,
    GuiaCaixaModule
  ]
})
export class LayoutModule { }
