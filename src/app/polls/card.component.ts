import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';
import { StateService } from "../services/state.service";

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

  constructor(private _state: StateService) {
  }

  ngOnInit() {
    this._state.voteObs.subscribe(res => {
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
      this.selected = true;
    }
  }

}
