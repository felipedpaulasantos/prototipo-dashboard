import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentesBasicosRoutingModule } from "./componentes-basicos-routing.module";
import { ComponentesBasicosComponent } from "./componentes-basicos.component";
import { BotoesComponent } from "./botoes/botoes.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";

import { HighlightModule } from "ngx-highlightjs";
import { NgxMaskModule } from "ngx-mask";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { SharedModule } from "src/app/shared/shared.module";
import { GuiaCaixaModule } from "src/app/guia-caixa/guia-caixa.module";
import { FormsComponent } from "./forms/forms.component";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [ComponentesBasicosComponent, BotoesComponent, FormsComponent],
  imports: [
    CommonModule,
    ComponentesBasicosRoutingModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgxMaskModule,
    DataTablesModule,
    HighlightModule,
    PerfectScrollbarModule,
    GuiaCaixaModule
  ]
})
export class ComponentesBasicosModule { }
