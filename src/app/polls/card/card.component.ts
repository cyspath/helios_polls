import { Component, Input, OnInit } from '@angular/core';
import { StateService } from "../../services/state.service";

@Component({
	selector: 'polls-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	@Input() value: string;

	public voted: boolean = false;
	public selected: boolean = false;

	constructor(private _state: StateService) {}

	public ngOnInit() {
		this._state.user.subscribe((u) => {			
			this.voted = u.voted;
			if (!u.voted) {
				this.selected = false;
			}
		});
	}

	public vote() {
		if (this.voted) return;
		this.selected = true;
		this._state.submitVote(this.value);
	}

}
