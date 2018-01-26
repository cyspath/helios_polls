import { Component, OnInit } from '@angular/core';

import { StateService } from "../services/state.service";
import { ApiService } from "../services/api.service";
import { Action } from "../shared/actions";
import { IVoter } from "./voter/Voter";

const CARD_VALUES = ['1', '2', '3', '5', '8', '13', '21', '?'];

@Component({
	selector: 'polls',
	templateUrl: './polls.component.html',
	styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
	public voters: Array<IVoter> = [];
	public cardValues: Array<string> = CARD_VALUES;
	public estimateMessage: string;
	
	constructor(private _state: StateService, private _api: ApiService) { }

	public ngOnInit() {
		this._state.user.subscribe(u => {
			this.estimateMessage = u.voted && u.vote ? `Your current estimate: ${u.vote}` : "You haven't estimated yet";
		});

		this._state.voters.subscribe(voters => {			
			this.voters = voters;
		});
	}

	public trackByVoter(index: number, voter: any): string { return voter.id; }

	public reset() {
		this._state.resetVotes();
	}

	public reveal() {
		this._state.revealVotes();
	}
}
