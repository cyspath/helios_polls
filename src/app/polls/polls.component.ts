import { Component, OnInit } from '@angular/core';
import { CardComponent } from "./card.component";
import { StateService } from "../services/state.service";

const CARD_VALUES = ['1', '2', '3', '5', '8', '13', '21', '?'];

@Component({
  selector: 'polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  cardValues: Array<string> = CARD_VALUES;
  vote: any;
  estimateMessage: string;
  
  constructor(private _state: StateService) { }

  ngOnInit() {
    this._state.voteObs.subscribe(res => {
      this.vote = res;
      this.updateEstimateMessage();
    });    
  }

  reset() {
    this._state.updateVoteObs(undefined);
  }

  updateEstimateMessage() {
    this.estimateMessage =  this.vote ? `Your current estimate: ${this.vote}` : "You haven't estimated yet";    
  }

}
