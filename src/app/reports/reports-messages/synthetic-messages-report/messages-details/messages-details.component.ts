import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MessageReportData } from '../../message-report-data';
import { CustomChartData } from 'src/app/shared/components/charts/custom-chart-data';
import { MessageService } from 'src/app/messages/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-messages-details',
  templateUrl: './messages-details.component.html'
})
export class MessagesDetailsComponent implements AfterViewInit {

  constructor(
    private messageService: MessageService,
    private toastr: ToastrService,
/*     private datatable: DataTableService */
  ) {}

  @ViewChildren('tableMessageDetailedRows', { read: false }) tableMessageRows: QueryList<any>;

  messageReportData: MessageReportData[] = [];
  messageChartData: CustomChartData = null;
  totalMsg = 0;
  totalMsgFromReactiveChat = 0;
  totalMsgFromActiveChat = 0;
  totalMsgReceived = 0;
  totalMsgSent = 0;
  totalSuccessMsg = 0;
  totalErrorMsg = 0;

  ngAfterViewInit() {
    this.tableMessageRows.changes.subscribe(() => {
/*       this.datatable.initializePrePopulated('#tableMessagesDetailed'); */
    });
  }

  listMessageAggregatedData(filterFormValue?: any) {

    this.messageService.listAggregatedMessages(filterFormValue)
      .subscribe(
        (messageReportData: MessageReportData[]) => {
          if (!messageReportData) {
            return;
          }
          this.toastr.success('Dados consultados com sucesso');
          this.messageReportData = messageReportData;
          this.aggregateMessageData();
        },
        (() => {
          this.toastr.error(`Erro ao consultar o relatório de Mensagens`);
        })
      );
  }

  aggregateMessageData() {

    this.totalMsg = this.totalMsgFromReactiveChat = this.totalMsgFromActiveChat = this.totalSuccessMsg = this.totalErrorMsg
      = this.totalMsgReceived = this.totalMsgSent = 0;

    this.messageReportData.forEach((reportData: MessageReportData) => {
      this.totalMsg += reportData.totalMsg;
      this.totalMsgFromReactiveChat += reportData.totalMsgFromReactiveChat;
      this.totalMsgFromActiveChat += reportData.totalMsgFromActiveChat;
      this.totalMsgReceived += reportData.totalMsgReceived;
      this.totalMsgSent += reportData.totalMsgSent;
      this.totalSuccessMsg += reportData.totalSuccessMsg;
      this.totalErrorMsg += reportData.totalErrorMsg;
    });

    this.prepareMessageChartData();
  }

  mockAggreateMessageData() {
    this.totalMsg = this.totalMsgFromReactiveChat = this.totalMsgFromActiveChat = this.totalSuccessMsg = this.totalErrorMsg
    = this.totalMsgReceived = this.totalMsgSent = 0;

    this.totalMsg += 1200;
    this.totalMsgFromReactiveChat += 800;
    this.totalMsgFromActiveChat += 400;
    this.totalMsgReceived += 600;
    this.totalMsgSent += 600;
    this.totalSuccessMsg += 1100;
    this.totalErrorMsg += 100;

    const mockReportData: MessageReportData[] = [];
    mockReportData.push(
      {
        period: "01/2020",
        totalMsg: 500,
        totalMsgFromReactiveChat: 120,
        totalMsgFromActiveChat: 380,
        totalSuccessMsg: 480,
        totalErrorMsg: 20,
        totalMsgReceived: 100,
        totalMsgSent: 400
      },
      {
        period: "02/2020",
        totalMsg: 722,
        totalMsgFromReactiveChat: 316,
        totalMsgFromActiveChat: 406,
        totalSuccessMsg: 722,
        totalErrorMsg: 0,
        totalMsgReceived: 81,
        totalMsgSent: 641
      }
    );

    this.messageReportData = mockReportData;

    this.prepareMessageChartData();
  }

  prepareMessageChartData() {

    const xAxisLabel = 'Períodos';
    const yAxisLabel = 'Quantidade de conversas';
    const chartLabels: string[] = [];
    const totalMsg: number[] = [];
    const totalMsgFromReactiveChat: number[] = [];
    const totalMsgFromActiveChat: number[] = [];
    const inMessagesData: number[] = [];
    const outMessagesData: number[] = [];
    let chartDatasets = [];

    this.messageReportData.forEach((reportData: MessageReportData) => {
      chartLabels.push(reportData.period);
      totalMsg.push(reportData.totalMsg);
      totalMsgFromReactiveChat.push(reportData.totalMsgFromReactiveChat);
      totalMsgFromActiveChat.push(reportData.totalMsgFromActiveChat);
      inMessagesData.push(reportData.totalMsgReceived);
      outMessagesData.push(reportData.totalMsgSent);
    });

    chartDatasets = [
      {
        data: totalMsg,
        label: 'Total de mensagens'
      },
      {
        data: totalMsgFromReactiveChat,
        label: 'Mensagens de conversas reativas'
      },
      {
        data: totalMsgFromActiveChat,
        label: 'Mensagens de conversas ativas'
      },
      {
        data: inMessagesData,
        label: 'Mensagens Recebidas'
      },
      {
        data: outMessagesData,
        label: 'Mensagens Enviadas'
      }
    ];

    this.messageChartData = {
      xAxisLabel,
      yAxisLabel,
      chartDatasets,
      chartLabels
    };

  }

}
