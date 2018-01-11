// reference: https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial/

import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ApiService {
  
  messages: Subject<any>;
  
  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        return response;
      })
   }
  
  send(data) {
    this.messages.next(data);
  }
}