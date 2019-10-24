import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/core/services/socket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @Input() messages: Message[] = [];

  constructor() {}

  ngOnInit() {}
}
