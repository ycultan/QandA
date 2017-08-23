import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  {path: 'new_question', pathMatch: 'full', component: NewQuestionComponent},
  {path: 'question/:id', component: ShowQuestionComponent},
  {path: 'question/:id/new_answer', component: NewAnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
