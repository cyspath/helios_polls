import { Component, Input, OnInit} from '@angular/core';

import { StateService } from "../../services/state.service";
import { ApiService } from "../../services/api.service";
import { Action } from "../../shared/actions";

@Component({
	selector: 'polls-voter',
	templateUrl: './voter.component.html',
	styleUrls: ['./voter.component.scss']
})

export class VoterComponent implements OnInit {
	@Input()
	voter: any;
	isCurrentUser: boolean;
	currentUser: any;

	constructor(private _state: StateService, private _api: ApiService) {}
	
	public ngOnInit() {
		this._state.user.subscribe(currentUser => {		
			this.currentUser = currentUser;
			this.isCurrentUser = this.voter.id === currentUser.id;
		});
	}

	private cancelVote() {
		if (this.isCurrentUser && this.currentUser.voted) {
			this._api.send({ action: Action.CancelVote });
		}		
	}
}
