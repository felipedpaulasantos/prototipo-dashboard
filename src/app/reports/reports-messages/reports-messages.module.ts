import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportsMessagesComponent } from './reports-messages.component';
import { MessagesModule } from '../../messages/messages.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { SyntheticMessageReportComponent } from './synthetic-messages-report/synthetic-messages-report.component';
import { AnalyticMessageReportComponent } from './analytic-messages-report/analytic-messages-report.component';
import { MessagesDetailsComponent } from './synthetic-messages-report/messages-details/messages-details.component';
import { ChatDetailsComponent } from './synthetic-messages-report/chat-details/chat-details.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    ReportsMessagesComponent,
    SyntheticMessageReportComponent,
    AnalyticMessageReportComponent,
    MessagesDetailsComponent,
    ChatDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    ChartsModule,
    SharedComponentsModule,
    NgxMaskModule.forChild()
  ]
})
export class ReportsMessagesModule { }
