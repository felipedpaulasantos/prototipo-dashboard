import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { Message } from './message';
import { MessageFilter } from './message-filter-form/messageFilter';
import { MessageReportData } from '../reports/reports-messages/message-report-data';
import { ChatReportData } from '../reports/reports-messages/chat-report-data';

const BASE_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  listMessages(messageFilterConditions: MessageFilter = {}): Observable<Message[]> {
    return <any> this.http.post(
      `${BASE_URL}/mensagens/listamensagem`,
      messageFilterConditions,
      httpOptions
    );
  }

  listAggregatedMessages(messageFilterConditions: MessageFilter = {}): Observable<MessageReportData[]> {
    return <any> this.http.post(
      `${BASE_URL}/mensagens/agregado`,
      messageFilterConditions,
      httpOptions
    );
  }

  listChats(messageFilterConditions: MessageFilter = {}): Observable<ChatReportData[]> {
    return <any> this.http.post(
      `${BASE_URL}/mensagens/listaconversa`,
      messageFilterConditions,
      httpOptions
    );
  }

  listCreators(messageFilterConditions: MessageFilter = {}): Observable<String[]> {
    return <any> this.http.post(
      `${BASE_URL}/mensagens/listasistema`,
      messageFilterConditions,
      httpOptions
    );
  }

  parseTimestampToDate(message: Message) {

    let newMessage: any;
    newMessage = Object.assign({}, message);

    try {
      newMessage.deliverTimestamp = new Date(message.deliverTimestamp).toLocaleDateString();
      newMessage.errorTimestamp = new Date(message.errorTimestamp).toLocaleDateString();
      newMessage.lastMessageDate = new Date(message.lastMessageDate).toLocaleDateString();
      newMessage.messageTimestamp = new Date(message.messageTimestamp).toLocaleDateString();
      newMessage.openMessageDate = new Date(message.openMessageDate).toLocaleDateString();
      newMessage.readTimestamp = new Date(message.readTimestamp).toLocaleDateString();
    } catch (e) {
      console.error(e);
    }

    return newMessage;
  }

}
