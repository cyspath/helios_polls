// reference: https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial/
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class WebsocketService {
  // Our socket connection
  private socket;

  connect(): Subject<MessageEvent> {
    this.socket = io(window.location.origin);
    // We define our observable which will observe any incoming messages from our socket.io server.
    let observable = new Observable(observer => {
        this.socket.on('message', (data) => {
          console.log('Websocket Server: ', data)
          observer.next(data);
        })
        return () => {
          this.socket.disconnect();
        }
    });
	// We define our Observer which will listen to messages from our other components and 
	// send messages back to our socket server whenever the `next()` method is called.
    let observer = {
        next: (data: Object) => {
            this.socket.emit('message', JSON.stringify(data));
        },
    };
    // we return our Rx.Subject which is a combination
    // of both an observer and observable.
    return Subject.create(observer, observable);
  }
}