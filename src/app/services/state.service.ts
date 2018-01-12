import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiService } from "./api.service";
import { Action } from "../shared/actions";

@Injectable()
export class StateService {

	public user = new BehaviorSubject<any>({ 
		id: '',
		avatar: '★',
		voted: false, 
		vote: undefined
	});

	public commentable = new BehaviorSubject<any>(['Welcome to Helios agile board!']);

	constructor(private _api: ApiService) {
		this._api.messages.subscribe(msg => {
			if (msg.action === Action.CurrentUser) {
				this.user.next(msg.value);
			}
		});
	}

	updateUser(options) {
		this.user.take(1).subscribe((u) => {
			const user = Object.assign({}, u, options);
			this.user.next(user);
		})
	}

	updateCommentObs(comments) {
		this.commentable.next(comments);
	}

}
