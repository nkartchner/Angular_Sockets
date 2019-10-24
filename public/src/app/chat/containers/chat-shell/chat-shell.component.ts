import { SocketService, Message } from 'src/app/core/services/socket.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-shell',
  templateUrl: './chat-shell.component.html',
  styleUrls: ['./chat-shell.component.scss'],
  providers: [SocketService]
})
export class ChatShellComponent implements OnInit {
  $name: Observable<string>;
  $messages: Observable<Message[]>;
  msg = {
    message: '',
    name: ''
  };
  $users: Observable<string[]>;
  showRawJson = false;
  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.$name = this.socketService.name.pipe(tap((name) => (this.msg.name = name)));
    this.$users = this.socketService.users;
    this.$messages = this.socketService.messages;
  }
  sendMessage(name: string) {
    this.socketService.sendMessage({ ...this.msg, name });
    this.msg.message = '';
  }
}
