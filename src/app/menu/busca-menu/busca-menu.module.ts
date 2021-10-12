import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaMenuComponent } from './busca-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GuiaCaixaModule } from 'src/app/guia-caixa/guia-caixa.module';


@NgModule({
  declarations: [BuscaMenuComponent],
  imports: [
    CommonModule,
    GuiaCaixaModule,
    SharedModule
  ],
  exports: [BuscaMenuComponent]
})
export class BuscaMenuModule { }
