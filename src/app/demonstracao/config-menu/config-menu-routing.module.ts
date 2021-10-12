import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigMenuComponent } from './config-menu.component';

const routes: Routes = [{ path: '', component: ConfigMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigMenuRoutingModule { }
