import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // animations module
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comments/comments.component';
import { PollsComponent } from './polls/polls.component';
import { CardComponent } from './polls/card.component';

import { StateService } from "./services/state.service";
import { ChatService } from "./services/chat.service";
import { WebsocketService } from "./services/websocket.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CommentsComponent,
    PollsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [StateService, ChatService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
