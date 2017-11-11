import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstrumentsComponent } from './instruments/instruments.component';
import { PortfolioComponent} from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '/instruments', pathMatch: 'full'},
  { path: 'instruments', component: InstrumentsComponent},
  { path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
