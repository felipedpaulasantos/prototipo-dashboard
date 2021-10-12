import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrototipadorComponent } from './prototipador.component';

const routes: Routes = [{ path: '', component: PrototipadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrototipadorRoutingModule { }
