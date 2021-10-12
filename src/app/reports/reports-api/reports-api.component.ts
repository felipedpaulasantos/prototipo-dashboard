import { Component, OnInit } from "@angular/core";

import { WhatsappStats } from "../../whatsapp-api/whatsapp-stats";
import { WhatsappSupport } from "../../whatsapp-api/whatsapp-support";
import { FormBuilder } from "@angular/forms";
import { WhatsappApiService } from "src/app/whatsapp-api/whatsapp-api.service";

@Component({
  selector: "app-reports-api",
  templateUrl: "./reports-api.component.html"
})
export class ReportsApiComponent implements OnInit {
  constructor(
    private whatsappService: WhatsappApiService,
    private fb: FormBuilder
  ) {}

  isMultiInstance = false;
  instances = [];
  supportData: WhatsappSupport[] = [];
  statsData: WhatsappStats[] = [];
  statsAggregatedData: WhatsappStats[] = [];

  viewFilterForm = this.fb.group({
    inMessage: [true],
    outMessage: [true],
    media: [true],
    support: [true]
  });

  ngOnInit() {
    this.getReportData();
  }

  getReportData() {
    this.whatsappService.isMultiInstance$.subscribe(
      (isMultiInstance: boolean) => {
        this.isMultiInstance = isMultiInstance;
      }
    );

    this.whatsappService.statsData$.subscribe(
      (currrentStatsData: Array<WhatsappStats>) => {
        this.statsData = currrentStatsData;
      }
    );

    this.whatsappService.supportData$.subscribe(currentSupportData => {
      this.supportData = currentSupportData;
    });

    this.whatsappService.statsAggregatedData$.subscribe(aggregatedData => {
      this.statsAggregatedData = aggregatedData;
    });
  }
}
