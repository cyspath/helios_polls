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

	public voters = new BehaviorSubject<any>([]);

	public commentable = new BehaviorSubject<any>(['Welcome to Helios agile board!']);

	constructor(private _api: ApiService) {
		let userId: any;

		this._api.messages.subscribe(msg => {

			switch(msg.action) {

				case Action.CurrentUser:
					const user = msg.value;
					userId = user.id;
					this.user.next(user);
					break;

				case Action.UpdateUsers:
					const users = msg.value; // users hash from server
					this.user.next(users[userId]);
					this.voters.next(Object.values(users));			
					break;
				
				default:
					console.log(`Default action: ${msg}`);
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

	resetVotes() {
		this._api.send({ action: Action.ResetVotes });		
	}
}
