import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigMenuRoutingModule } from './config-menu-routing.module';
import { ConfigMenuComponent } from './config-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { DataTablesModule } from 'angular-datatables';
import { GuiaCaixaModule } from 'src/app/guia-caixa/guia-caixa.module';


@NgModule({
  declarations: [ConfigMenuComponent],
  imports: [
    CommonModule,
    ConfigMenuRoutingModule,
    DataTablesModule,
    GuiaCaixaModule,
    SharedModule
  ]
})
export class ConfigMenuModule { }
