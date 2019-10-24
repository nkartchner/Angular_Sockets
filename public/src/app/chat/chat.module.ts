import { NgModule } from '@angular/core';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatShellComponent } from './containers/chat-shell/chat-shell.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [{ path: '', component: ChatShellComponent }];

@NgModule({
  declarations: [ChatShellComponent, UserListComponent, MessagesComponent],
  imports: [FormsModule, CommonModule, RouterModule.forChild(ROUTES)]
})
export class ChatModule {}
