import { Component, Input, OnInit} from '@angular/core';

import { StateService } from "../../services/state.service";
import { ApiService } from "../../services/api.service";

@Component({
	selector: 'polls-voter',
	templateUrl: './voter.component.html',
	styleUrls: ['./voter.component.scss']
})

export class VoterComponent implements OnInit {
	@Input()
	voter: any;
	isCurrentUser: boolean;

	constructor(private _state: StateService, private _api: ApiService) {}
	
	ngOnInit() {
		this._state.socketable.subscribe(res => {
			this.isCurrentUser = this.voter.id === res;
		});
	}
}
