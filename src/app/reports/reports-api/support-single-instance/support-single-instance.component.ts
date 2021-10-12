import { Component, Input } from '@angular/core';
import { WhatsappSupport } from '../../../whatsapp-api/whatsapp-support';
import { ReportsApiFilter } from '../reports-api-filter';

@Component({
  selector: 'app-support-single-instance',
  templateUrl: './support-single-instance.component.html'
})
export class ReportSupportSingleInstanceComponent {

  constructor() {}

  @Input() supportData = [];
  @Input() filter: ReportsApiFilter;

}
