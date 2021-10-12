import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  Validators
} from "../../../../../node_modules/@angular/forms";

import { MessagesDetailsComponent } from "./messages-details/messages-details.component";
import { ChatDetailsComponent } from "./chat-details/chat-details.component";
import { DateValidator } from "../../../shared/validators/date.validator";

@Component({
  selector: "app-synthetic-messages-report",
  templateUrl: "./synthetic-messages-report.component.html"
})
export class SyntheticMessageReportComponent implements OnInit {
  constructor(
    private fb: FormBuilder  ) {}

  @ViewChild(MessagesDetailsComponent, { static: true })
  messagesDetailsComponent: MessagesDetailsComponent;
  @ViewChild(ChatDetailsComponent, { static: true })
  chatDetailsComponent: ChatDetailsComponent;

  currentAccount: Account;
  accounts: Account[];
  creators: String[];

  filterForm = this.fb.group({
    accountId: ["", Validators.pattern("[0-9]{10,13}")],
    creator: [""],
    dataInicial: ["", DateValidator.simpleDate],
    dataFinal: ["", DateValidator.simpleDate]
  });

  ngOnInit(): void {
/*     this.accountService.currentAccount$.subscribe(currentAccount => {
      this.currentAccount = currentAccount;
    });

    this.accountService.accounts$.subscribe(accounts => {
      this.accounts = accounts;
    });

    this.messageService.listCreators().subscribe(creators => {
      this.creators = creators;
    }); */

    this.listAggregatedData();
  }

  listAggregatedData() {
/*     this.messagesDetailsComponent.listMessageAggregatedData(
      filterValue as MessageFilter
    );
    this.chatDetailsComponent.listChatAggregatedData(
      filterValue as MessageFilter
    ); */

    this.messagesDetailsComponent.mockAggreateMessageData();
    this.chatDetailsComponent.mockAggregateChatData();
  }

  formatDates(formData: any) {
    if (formData) {
      if (formData.dataInicial) {
        formData.dataInicial = this.toDate(formData.dataInicial);
      }
      if (formData.dataFinal) {
        formData.dataFinal = this.toDate(formData.dataFinal);
      }
    }
    return formData;
  }

  private toDate = dateStr => {
    const [day, month, year] = dateStr.split("/");
    return new Date(year, month - 1, day);
  }
}
