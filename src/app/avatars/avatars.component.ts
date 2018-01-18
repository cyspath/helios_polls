import { Component, OnInit } from '@angular/core';

import { ApiService, LocalStoreService, StateService } from "../services";
import { Action } from "../shared/actions";

@Component({
	selector: 'avatars',
	templateUrl: './avatars.component.html',
	styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {
	private values: string[] = ['JH', 'ML', 'KS', 'LR'];

	constructor(private _state: StateService, private _api: ApiService, private _localStore: LocalStoreService) {}

	ngOnInit() {
		const avatar = this._localStore.getAvatar();
		if (avatar) {
			console.log(`AvatarsComponent: avatar found! ${avatar}`);
			this.setAvatar(avatar);			
		}
	}

	private setAvatar(avatar) {
		this._localStore.setAvatar(avatar);
		this._api.send({ action: Action.UpdateAvatar, value: avatar });
	}
}
