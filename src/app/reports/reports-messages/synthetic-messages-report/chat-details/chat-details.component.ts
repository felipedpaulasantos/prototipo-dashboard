import { Component, ViewChildren, QueryList, AfterViewInit } from "@angular/core";
import { ChatReportData } from "../../chat-report-data";
import { CustomChartData } from "src/app/shared/components/charts/custom-chart-data";
import { MessageService } from "src/app/messages/message.service";
import { ToastrService } from "ngx-toastr";
import { MessageFilter } from "src/app/messages/message-filter-form/messageFilter";

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html'
})
export class ChatDetailsComponent implements AfterViewInit {

  constructor(
    private messageService: MessageService,
    private toastr: ToastrService,
/*     private datatable: DataTableService */
  ) {}

  @ViewChildren('tableChatDetailedRows', { read: false }) tableChatRows: QueryList<any>;

  chatReportData: ChatReportData[] = [];
  chatChartData: CustomChartData = null;

  totalChats = 0;
  totalActiveChats = 0;
  totalReactiveChats = 0;

  ngAfterViewInit() {
    this.tableChatRows.changes.subscribe(t => {
/*       this.datatable.initializePrePopulated("#tableChatsDetailed"); */
    });
  }

  listChatAggregatedData(filterFormValue?: MessageFilter) {

    this.messageService.listChats(filterFormValue)
      .subscribe(
        (chatReportData: ChatReportData[]) => {
          if (!chatReportData) {
            return;
          }
          this.chatReportData = chatReportData;
          this.aggregateChatData();
        },
        (err => {
          this.toastr.error(`Erro ao consultar o relatório de Conversas`);
        })
      );
  }

  aggregateChatData() {

    this.totalChats = this.totalActiveChats = this.totalReactiveChats = 0;

    if (!this.chatReportData) {
      return;
    }
    this.chatReportData.forEach((reportData: ChatReportData) => {
      this.totalChats += reportData.totalChats;
      this.totalActiveChats += reportData.activeChats;
      this.totalReactiveChats += reportData.reactiveChats;
    });
    this.prepareChatChartData();
  }

  mockAggregateChatData() {
    this.totalChats = this.totalActiveChats = this.totalReactiveChats = 0;
    this.totalChats += 350;
    this.totalActiveChats += 280;
    this.totalReactiveChats += 70;

    const mockReportData: ChatReportData[] = [];
    mockReportData.push(
      {
        period: "01/2020",
        activeChats: 80,
        reactiveChats: 40,
        totalChats: 120
      },
      {
        period: "02/2020",
        activeChats: 100,
        reactiveChats: 60,
        totalChats: 160
      }
    );

    this.chatReportData = mockReportData;

    this.prepareChatChartData();
  }

  prepareChatChartData() {

    const xAxisLabel = "Períodos";
    const yAxisLabel = "Quantidade de conversas";
    const chartLabels: string[] = [];
    const totalChats: number[] = [];
    const activeChats: number[] = [];
    const reactiveChats: number[] = [];

    let chartDatasets = [];

    this.chatReportData.forEach((reportData: ChatReportData) => {
      chartLabels.push(reportData.period);
      totalChats.push(reportData.totalChats);
			reactiveChats.push(reportData.reactiveChats);
      activeChats.push(reportData.activeChats);
    });

    chartDatasets = [
      {
        data: totalChats,
        label: "Total de conversas"
      },
      {
        data: activeChats,
        label: "Conversas de origem ativa"
      },
      {
        data: reactiveChats,
        label: "Conversas de origem reativa"
      }
    ];

    this.chatChartData = {
      xAxisLabel,
      yAxisLabel,
      chartDatasets,
      chartLabels
    };

  }

}
