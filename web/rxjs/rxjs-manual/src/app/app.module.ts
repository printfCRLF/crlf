import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { P01IntroductionComponent } from './p01-introduction/p01-introduction.component';
import { P02ObservableComponent } from './p02-observable/p02-observable.component';
import { P03SubjectComponent } from './p03-subject/p03-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    P01IntroductionComponent,
    P02ObservableComponent,
    P03SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
