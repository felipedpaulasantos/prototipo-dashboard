import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  AfterViewChecked,
  OnInit,
  Output
} from "@angular/core";
import { Message } from "../../../messages/message";
import { MessageService } from "../../../messages/message.service";
import { MessageReportData } from "../message-report-data";
import { ToastrService } from "ngx-toastr";
import { MessageFilter } from "src/app/messages/message-filter-form/messageFilter";

@Component({
  selector: "app-analytic-messages-report",
  templateUrl: "./analytic-messages-report.component.html"
})
export class AnalyticMessageReportComponent implements OnInit {
  @Input() messageReportData: MessageReportData[] = [];
  messages: Message[] = null;
  hasMessages = false;

  constructor(
/*     private datatable: DataTableService, */
    private messageService: MessageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.receiveMessages(this.messages);
  }

  receiveFilterValue(filterValue: MessageFilter) {
    this.messageService.listMessages(filterValue).subscribe(
      (messages: Message[]) => {
        if (messages && messages.length > 0) {
          this.toastr.success("Mensagens consultadas com sucesso");
          this.receiveMessages(messages);
        } else {
          this.toastr.warning(`Nenhum resultado encontrado`);
        }
      },
      (err: Error) =>
        this.toastr.error(
          `Não foi possível consultar as mensagens: <br><small>${err.message}</small>`
        )
    );
  }

  receiveMessages(receivedMessages: Message[]) {
    const messages = [];
    if (!receivedMessages || receivedMessages.length === 0) {
      this.messages = [];
      this.hasMessages = false;
      return;
    }

    this.hasMessages = true;

    receivedMessages.forEach(receivedMessage => {
      const newMessage = new Message(
        receivedMessage.account,
        receivedMessage.deliverTimestamp,
        receivedMessage.creator,
        receivedMessage.errorData,
        receivedMessage.errorTimestamp,
        receivedMessage.fromId,
        receivedMessage.idChat,
        receivedMessage.lastMessageDate,
        receivedMessage.managerName,
        receivedMessage.messageTimestamp,
        receivedMessage.openMessageDate,
        receivedMessage.origin,
        receivedMessage.readTimestamp,
        receivedMessage.status,
        receivedMessage.text,
        receivedMessage.toId
      );
      messages.push(newMessage);
    });
    this.messages = messages;

/*     this.datatable.initialize("tableMensagens", this.messages, [
      "idChat",
      "fromId",
      "toId",
      "text",
      "messageTimestampString",
      "managerName",
      "creator",
      "origin",
      "openMessageDateString",
      "lastMessageDateString"
    ]); */
  }
}
