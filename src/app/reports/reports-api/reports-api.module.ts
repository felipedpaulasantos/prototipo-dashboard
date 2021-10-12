import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsApiComponent } from './reports-api.component';
import { ReportStatsSingleInstanceComponent } from './stats-single-instance/stats-single-instance.component';
import { ReportMultiInstanceComponent } from './report-multi-instance/report-multi-instance.component';
import { ReportSupportSingleInstanceComponent } from './support-single-instance/support-single-instance.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReportsApiComponent,
    ReportMultiInstanceComponent,
    ReportStatsSingleInstanceComponent,
    ReportSupportSingleInstanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class ReportsApiModule { }
