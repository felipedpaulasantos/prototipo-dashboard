import { Component, Input } from '@angular/core';
import { WhatsappStats } from '../../../whatsapp-api/whatsapp-stats';
import { ReportsApiFilter } from '../reports-api-filter';

@Component({
  selector: 'app-stats-single-instance',
  templateUrl: './stats-single-instance.component.html'
})
export class ReportStatsSingleInstanceComponent {

  constructor(
   ) {}

  @Input() statsData: WhatsappStats[] = [];
  @Input() filter: ReportsApiFilter;

}
