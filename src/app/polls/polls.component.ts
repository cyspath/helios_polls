import { Component, OnInit } from '@angular/core';

import { StateService } from "../services/state.service";
import { ApiService } from "../services/api.service";
import { Action } from "../shared/actions";

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
		this._state.user.subscribe(u => {
			this.estimateMessage = u.voted && u.vote ? `Your current estimate: ${u.vote}` : "You haven't estimated yet";
		});

		this._state.voters.subscribe(voters => {			
			this.voters = voters;
		});
	}

	trackByVoter(index: number, voter: any): string { return voter.id; }

	reset() {
		this._state.resetVotes();
	}
}
