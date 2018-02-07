import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ApiService, LocalStoreService, StateService } from "../services";
import { Action } from "../shared/Actions";

@Component({
	selector: 'avatars',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
	@ViewChild('avatarInput') avatarInput: ElementRef;
	
	public text: string = '';

	constructor(private _state: StateService, private _api: ApiService, private _localStore: LocalStoreService) {}

	ngOnInit() {
		const avatar = this._localStore.getAvatar();
		if (avatar) {
			console.log(`AvatarsComponent: avatar found! ${avatar}`);
			this.setAvatar(avatar);			
		}
	}

	public focusOut() {
		this.text = '';		
	}

	public handleClick(event) {
		this.text = '';	
		this.avatarInput.nativeElement.blur()
		const avatar = event.target.value;
		if (avatar.length > 0) {
			this.setAvatar(avatar);
		}
	}

	private setAvatar(avatar) {
		this._localStore.setAvatar(avatar);
		this._api.send({ action: Action.UpdateAvatar, value: avatar });
	}
}
