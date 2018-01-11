import { Component, OnInit } from '@angular/core';

import { StateService } from "../services/state.service";
import { ApiService } from "../services/api.service";

const CARD_VALUES = ['1', '2', '3', '5', '8', '13', '21', '?'];

@Component({
	selector: 'polls',
	templateUrl: './polls.component.html',
	styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

	cardValues: Array<string> = CARD_VALUES;
	voters: any = [];

	vote: any;
	estimateMessage: string;
	
	constructor(private _state: StateService, private _api: ApiService) { }

	ngOnInit() {
		this._state.voteable.subscribe(res => {
			this.vote = res;
			this.updateEstimateMessage();
		});

		this._api.messages.subscribe(msg => {
			if (msg.type === 'UPDATE_USERS') {
				console.log('UPDATING_VOTERS:', msg.users);
				this.voters = Object.values(msg.users);        
			}
		});
	}

	trackByVoter(index: number, voter: any): string { return voter.id; }

	reset() {
		this._state.updateVoteObs(undefined);
		this._api.send({ type: 'RESET_VOTES' });
	}

	updateEstimateMessage() {
		this.estimateMessage =  this.vote ? `Your current estimate: ${this.vote}` : "You haven't estimated yet";  
	}

}
