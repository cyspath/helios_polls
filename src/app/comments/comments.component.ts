import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from "@angular/animations";
import { StateService } from "../services/state.service";
import { ApiService } from "../services/api.service";
import { Action } from "../shared/Actions";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    trigger('comments', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35%)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })            
          ]))
        ]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35%)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 })            
          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class CommentsComponent implements OnInit {

  btnText: string = 'Add Comment';
  commentText: string = '';
  comments = [];

  constructor(private _state: StateService, private _api: ApiService) { }

  ngOnInit() {
    this._state.commentable.subscribe(res => this.comments = res);
    this.emitChange();

    // this._api.messages.subscribe(msg => {
    //   this.comments.push(msg.value);
    //   this.commentText = '';
    //   this.emitChange();
    // })
  }

  addItem() {
    // this.comments.push(this.commentText);
    this._api.send({ action: Action.NewComment, value: this.commentText });
    // this.commentText = '';
    // this.emitChange();
  }

  removeItem(i) {
    this.comments.splice(i, 1);
    this.emitChange();    
  }

  emitChange() {
    this._state.updateCommentObs(this.comments);
  }

}
