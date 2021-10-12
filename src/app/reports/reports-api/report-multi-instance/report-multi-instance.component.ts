import { Component, OnInit, Input } from '@angular/core';
import { WhatsappStats } from '../../../whatsapp-api/whatsapp-stats';
import { WhatsappSupport } from '../../../whatsapp-api/whatsapp-support';

@Component({
  selector: 'app-report-multi-instance',
  templateUrl: 'report-multi-instance.component.html'
})
export class ReportMultiInstanceComponent implements OnInit {

  @Input() supportData: WhatsappSupport[] = [];
  @Input() statsData: WhatsappStats[] = [];
  @Input() selectedInstance: string;
  @Input() filter;
  @Input() statsAggregatedData: WhatsappStats[] = [];
  instances = [];

  constructor() {}

  ngOnInit() {
    this.statsData.forEach((instance: WhatsappStats) => {
      this.instances.push(instance.instance_name);
    });
  }

  updateSelectedInstance(selectedOption: string) {
    this.selectedInstance = selectedOption;
  }

}
