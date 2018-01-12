import { Component, OnInit } from '@angular/core';

import { StateService } from "../services/state.service";
import { ApiService } from "../services/api.service";
import { Action } from "../shared/actions";

@Component({
	selector: 'avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
	private values: string[] = ['JH', 'ML', 'KS', 'LR'];

	constructor(private _state: StateService, private _api: ApiService) {}

	ngOnInit() {
		const avatar = localStorage.getItem('polls-app-avatar');
		if (avatar) {
			this.updateAvatar(avatar);
		}
	}

	private setAvatar(avatar) {
		localStorage.setItem('polls-app-avatar', avatar);
		this.updateAvatar(avatar);
	}

	private updateAvatar(avatar) {
		this._state.updateUser({ avatar: avatar });
		this._api.send({ action: Action.UpdateAvatar, value: avatar });
	}

}
