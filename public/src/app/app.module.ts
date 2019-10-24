import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { AppRoutingModule } from './app-routing.module';
import { SocketService } from './core/services/socket.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
