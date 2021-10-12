import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { DateValidator } from '../../shared/validators/date.validator';

@Component({
  selector: 'app-message-filter-form',
  templateUrl: './message-filter-form.component.html',
  styleUrls: ['./message-filter-form.component.css']
})
export class MessageFilterFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder ) {}

  @Input() fields: string[] = [
    'accountId', 'dataInicial', 'dataFinal',
    'pageSize', 'origin', 'managerName', 'creator'
  ];

  accounts: Account[] = null;
  creators: String[];

  messageFilterForm = this.fb.group({
    accountId: [''],
    dataInicial: ['', [ DateValidator.simpleDate, DateValidator.simpleMonthDate]],
    dataFinal: ['', DateValidator.simpleDate],
    pageSize: [10, [Validators.required, Validators.min(10), Validators.max(100)]],
    origin: [''],
    managerName: [''],
	creator: ['']
  });

  origins = [
    {value: '', name: 'Enviado e Recebido'},
    {value: 'E', name: 'Enviado'},
    {value: 'R', name: 'Recebido'}
  ];

  managers = [
    {value: '', name: 'Qualquer'},
    {value: 'RCK', name: 'Rocket Chat'},
    {value: 'QNA', name: 'QNA'},
    {value: 'BOT', name: 'SIBOT'}
  ];

  @Output() messages = new EventEmitter();
  @Output() formValueEvent = new EventEmitter();

  ngOnInit(): void {

/*     this.accountService.currentAccount$
      .subscribe(currentAccount => {
        this.currentAccount = currentAccount;
      });

    this.accountService.accounts$
      .subscribe(accounts => {
        this.accounts = accounts;
      });

    this.messageService.listCreators()
      .subscribe(creators => {
        this.creators = creators;
      });
      this.messageFilterForm.get('accountId').setValue(''); */
  }

  getCurrentAccount() {

/*     this.accountService.currentAccount$
      .subscribe(account => {
        if (account) {
          this.currentAccount = account;
          this.messageFilterForm.get('accountId').patchValue(account.id);
        }
      }); */
  }

  emitValue() {

    const formData = this.formatDates(this.messageFilterForm.value);
    this.formValueEvent.emit(
      formData
    );
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

  private toDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(year, month - 1, day);
  }

}
