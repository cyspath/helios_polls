import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiService } from "./api.service";

@Injectable()
export class StateService {

	public socketable = new BehaviorSubject<string>(undefined);

	public commentable = new BehaviorSubject<any>(['Welcome to Helios agile board!']);

	public voteable = new BehaviorSubject<any>(undefined);	

	constructor(private _api: ApiService) {
		this._api.messages.subscribe(msg => {
			if (msg.type === 'SOCKET_ID') {
				console.log('new socket!', msg);
								
				this.socketable.next(msg.value);      
			}
		});
	}

	updateCommentObs(comments) {
		console.log(`state updated: comments ${comments.length}`);
		this.commentable.next(comments);
	}

	updateVoteObs(vote) {
		console.log(`state updated: vote is ${vote}`);
		this.voteable.next(vote);
	}

}
