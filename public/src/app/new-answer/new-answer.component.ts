import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {
  question = {
    _id: 0,
    q_text: "",
    description: ""
  };
  answer = {
    user: "",
    likes: 0
  };
  constructor(private _api: ApiService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getQuestion();
    this.getUser();
  }

  getQuestion(){
    this._route.paramMap
    .switchMap(params => {
      return this._api.getQuestion(params.get('id'))
    })
    .subscribe(data => this.question = data)
  }

  getUser(){
    this.answer.user = this._api.getUser().name;
  }

  onSubmit(){
    this._api.createAnswer(this.answer, this.question._id);
  }
}
