import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiService } from "./api.service";
import { Action } from "../shared/Actions";
import { IVoter } from "../polls/voter/Voter";

@Injectable()
export class StateService {

	public user = new BehaviorSubject<IVoter>({ 
		id: '',
		avatar: '',
		voted: false, 
		vote: undefined,
		reveal: false
	});

	public voters = new BehaviorSubject<any>([]);

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

	public resetVotes() {
		this._api.send({ action: Action.ResetVotes });		
	}

	public revealVotes() {
		this._api.send({ action: Action.RevealVotes });		
	}

	public setAvatar(avatar) {
		this._api.send({ action: Action.UpdateAvatar, value: avatar });		
	}

	public submitVote(value) {
		this._api.send({ action: Action.NewVote, value });
	}

	public cancelVote() {
		this._api.send({ action: Action.CancelVote });		
	}
}
