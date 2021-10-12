import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExtratoComponent } from "./extrato/extrato.component";
import { TabelaExtratoDirective } from "./extrato/tabela-extrato.directive";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [ExtratoComponent, TabelaExtratoDirective],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ExtratoComponent, TabelaExtratoDirective]
})
export class ExtratoModule { }
