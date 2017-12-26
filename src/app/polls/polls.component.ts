import { Component, OnInit } from '@angular/core';
import { CardComponent } from "./card.component";
import { StateService } from "../services/state.service";
import { ChatService } from '../services/chat.service';

const CARD_VALUES = ['1', '2', '3', '5', '8', '13', '21', '?'];

@Component({
  selector: 'polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss', './card.component.scss']
})
export class PollsComponent implements OnInit {

  cardValues: Array<string> = CARD_VALUES;
  vote: any;
  estimateMessage: string;
  users: any;
  
  constructor(private _state: StateService, private _chat: ChatService) { }

  ngOnInit() {
    this._state.voteObs.subscribe(res => {
      this.vote = res;
      this.updateEstimateMessage();
    });    

    this._chat.messages.subscribe(msg => {
      if (msg.type === 'updateUsers') {
        this.users = Object.keys(msg.users);
      }
    })
  }

  reset() {
    this._state.updateVoteObs(undefined);
  }

  updateEstimateMessage() {
    this.estimateMessage =  this.vote ? `Your current estimate: ${this.vote}` : "You haven't estimated yet";    
  }

}
