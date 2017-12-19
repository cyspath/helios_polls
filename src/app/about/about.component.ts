import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { StateService } from "../services/state.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  comments: any;

  constructor(private route: ActivatedRoute, private router: Router, private _state: StateService) {
    this.route.params.subscribe(res => console.log(res.id))
   }

  ngOnInit() {
    this._state.commentObs.subscribe(res => this.comments = res);
  }

  takeMeHome() {
    this.router.navigate(['']);
  }

}
