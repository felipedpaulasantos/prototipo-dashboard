import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsApiModule } from './reports-api/reports-api.module';
import { ReportsMessagesModule } from './reports-messages/reports-messages.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportsApiModule,
    ReportsMessagesModule,
    ChartsModule,
    SharedComponentsModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
