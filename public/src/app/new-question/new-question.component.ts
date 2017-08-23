import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  question = {}
  constructor(private _api: ApiService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._api.createQuestion(this.question)
  }
}
