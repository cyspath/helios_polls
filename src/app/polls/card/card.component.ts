import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';

import { StateService } from "../../services/state.service";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'polls-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() value: string;  
  @Output() voteEvent = new EventEmitter<string>();
  
  clickable: boolean;
  selected: boolean = false;

  constructor(private _state: StateService, private _api: ApiService) {
  }

  ngOnInit() {
    this._state.voteable.subscribe(res => {
      this.clickable = res === undefined ? true : false;
      if (this.clickable) {
        this.selected = false;
      }
	});
  }

  vote() {
    console.log(`clicked on ${this.value} (can vote: ${this.clickable})`);
    if (this.clickable) {
      this.voteEvent.emit(this.value); // let parent polls know a vote is submitted

      this._state.updateVoteObs(this.value); // update canVoteObs to emit false
      
      this._api.send({ type: 'NEW_VOTE', value: this.value });

      this.selected = true;
    }
  }

}
