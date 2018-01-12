import { Component, Input, OnInit } from '@angular/core';

import { StateService } from "../../services/state.service";
import { ApiService } from "../../services/api.service";
import { Action } from "../../shared/actions";

@Component({
	selector: 'polls-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	@Input() value: string;

	public voted: boolean = false;
	selected: boolean = false;

	constructor(private _state: StateService, private _api: ApiService) {}

	ngOnInit() {
		this._state.user.subscribe((u) => {			
			this.voted = u.voted;
			if (!u.voted) {
				this.selected = false;
			}
		});
	}

	vote() {
		this.selected = true;
		this._state.updateUser({ vote: this.value, voted: true });
		this._api.send({ action: Action.NewVote, value: this.value });
	}

}
