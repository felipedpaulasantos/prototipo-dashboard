import { Component, OnInit } from '@angular/core';

import { SocketioService } from '../shared/services/socketio.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  contador: any;
  url: string;
  message: string;
  messages = [];

  constructor(
    private socketService: SocketioService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
/*     this.socketService.setupSocketConnection();
    this.url = environment.SOCKET_ENDPOINT;
    this.socketService.contador$.subscribe(contador => {
      this.contador = contador;
    });
    this.socketService.message$.subscribe(msg => {
      if (msg) {
        this.messages.push(msg);
        this.scrollSmoothToBottom("chatDiv");
      }
      this.message = msg;
    }); */
  }

  resetarSocket() {
    this.socketService.resetSocket();
  }

  sendMessage(msg: string) {
    this.scrollSmoothToBottom("chatDiv");
    this.socketService.sendMessage(`Front: ${msg}`);
    $("#msgInput input").trigger("focus");
  }

  scrollSmoothToBottom(id) {
    const div = "#" + id;
    $(div).stop().animate({
      scrollTop: $(div)[0].scrollHeight
    }, 800);
 }

}
