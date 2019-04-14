import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { P01IntroductionComponent } from './p01-introduction/p01-introduction.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: AppComponent
  // },
  {
    path: "introduction",
    component: P01IntroductionComponent
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
