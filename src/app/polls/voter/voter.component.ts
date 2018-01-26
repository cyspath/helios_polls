import { Component, Input, OnInit} from '@angular/core';

import { StateService } from "../../services/state.service";
import { ApiService } from "../../services/api.service";
import { Action } from "../../shared/actions";
import { IVoter } from "./Voter";
import { Result } from "../Result.enum";

@Component({
	selector: 'polls-voter',
	templateUrl: './voter.component.html',
	styleUrls: ['./voter.component.scss']
})

export class VoterComponent implements OnInit {
	@Input() public voter: IVoter;
	@Input() public result: Result;

	public isCurrentUser: boolean;
	public currentUser: any;
	public Result = Result;
	
	constructor(private _state: StateService, private _api: ApiService) {}
	
	public ngOnInit() {
		this._state.user.subscribe(currentUser => {		
			this.currentUser = currentUser;
			this.isCurrentUser = this.voter.id === currentUser.id;
		});
	}

	public cancelVote() {
		if (this.isCurrentUser && this.currentUser.voted) {
			this._api.send({ action: Action.CancelVote });
		}		
	}
}
