import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;
  private contadorSource = new BehaviorSubject<any>("");
  public contador$ = this.contadorSource.asObservable();

  private messageSource = new BehaviorSubject<string>("");
  public message$ = this.messageSource.asObservable();

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    this.socket.emit('my message', 'Hello there from Angular.');

    this.socket.on('message', (msg: string) => {
      this.messageSource.next(msg);
    });

    this.socket.on('my broadcast', (data: string) => {
      this.contadorSource.next(data);
      this.socket.emit('update', data);
    });
  }

  resetSocket() {
    this.socket.emit('reset', 0);
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
}
