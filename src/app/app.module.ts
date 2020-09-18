import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisciplinasListComponent } from './disciplinas-list/disciplinas-list.component';
import { DisciplinasDetailsComponent } from './disciplinas-details/disciplinas-details.component';
import { GradeComponent } from './grade/grade.component';
import { ProgressoComponent } from './progresso/progresso.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'grade', component:  DisciplinasListComponent },
      { path: 'grade/:ciclo', component: DisciplinasListComponent },
      { path: 'disciplina/:code', component:  DisciplinasDetailsComponent },
      { path: 'progresso', component:  ProgressoComponent }
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinasListComponent, DisciplinasDetailsComponent, GradeComponent, ProgressoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
