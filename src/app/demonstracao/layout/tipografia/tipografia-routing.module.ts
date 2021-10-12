import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipografiaComponent } from './tipografia.component';

const routes: Routes = [{ path: '', component: TipografiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipografiaRoutingModule { }
