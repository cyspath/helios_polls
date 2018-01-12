import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // animations module
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AvatarComponent } from './avatar/avatar.component';
import { CommentsComponent } from './comments/comments.component';
import { PollsComponent } from './polls/polls.component';
import { CardComponent } from './polls/card/card.component';
import { VoterComponent } from './polls/voter/voter.component';

import { StateService } from "./services/state.service";
import { ApiService } from "./services/api.service";
import { WebsocketService } from "./services/websocket.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	AboutComponent,
	AvatarComponent,
    CommentsComponent,
    PollsComponent,
    CardComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [StateService, ApiService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
