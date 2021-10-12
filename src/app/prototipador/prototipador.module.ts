import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PrototipadorRoutingModule } from "./prototipador-routing.module";
import { PrototipadorComponent } from "./prototipador.component";
import { SharedModule } from "../shared/shared.module";
import { GuiaCaixaModule } from "../guia-caixa/guia-caixa.module";
import { ResizableModule } from "angular-resizable-element";
import { MenuElementosComponent } from './menu-elementos/menu-elementos.component';


@NgModule({
  declarations: [PrototipadorComponent, MenuElementosComponent],
  imports: [
    CommonModule,
    PrototipadorRoutingModule,
    SharedModule,
    GuiaCaixaModule,
    ResizableModule
  ]
})
export class PrototipadorModule { }
