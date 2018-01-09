// reference: https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial/

import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class CommentService {
  
  messages: Subject<any>;
  type: string = 'COMMENT';
  
  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .filter((response: any): any => {
        return response.type === this.type;
      })
   }
  
  // Our simplified interface for sending
  // messages back to our socket.io server
  send(data) {
    this.addType(data);
    this.messages.next(data);
  }
  
  addType(data) {
    data.type = this.type;	
  }
}