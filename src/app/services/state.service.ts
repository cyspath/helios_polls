import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class StateService {

  private comments = new BehaviorSubject<any>(['Welcome to Helios agile board!']);
  commentObs = this.comments.asObservable();

  private vote = new BehaviorSubject<any>(undefined);  
  voteObs = this.vote.asObservable();

  constructor() { }

  updateCommentObs(comments) {
    console.log(`state updated: comments ${comments.length}`);
    this.comments.next(comments);
  }

  updateVoteObs(vote) {
    console.log(`state updated: vote is ${vote}`);
    this.vote.next(vote);
  }

}
