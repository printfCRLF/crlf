import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { P01IntroductionComponent } from './p01-introduction/p01-introduction.component';
import { P02ObservableComponent } from './p02-observable/p02-observable.component';
import { P03SubjectComponent } from './p03-subject/p03-subject.component';

const routes: Routes = [
  {
    path: "introduction",
    component: P01IntroductionComponent
  },
  {
    path: "observable",
    component: P02ObservableComponent
  },
  {
    path: "subject",
    component: P03SubjectComponent
  },
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
