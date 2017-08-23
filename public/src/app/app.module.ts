import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewQuestionComponent,
    ShowQuestionComponent,
    NewAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
