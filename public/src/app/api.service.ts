import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {
  user = {
    name: ""
  }
  constructor(private _http: Http) { }

  login(user){
    this.user = user
  }

  getUser() {
    return this.user;
  }

  createQuestion(question){
    this._http.post('/questions', question)
    .map(data => data.json())
    .toPromise();
  }

  getAllQuestions(){
    return this._http.get('/questions')
    .map(data => data.json())
    .toPromise();
  }

  getQuestion(q_id){
    return this._http.get('/questions/' + q_id)
    .map(data => data.json())
    .toPromise();
  }

  createAnswer(answer, id){
    this._http.post('/answers/' + id, answer)
    .map(data => data.json())
    .toPromise();
  }

  getAllAnswers(q_id){
    return this._http.get('/answers/' + q_id)
    .map(data => data.json())
    .toPromise();
  }

  addLike(a_id){
    this._http.get('/answerslikes/' + a_id)
    .map(data => data.json())
    .toPromise();
  }
}
