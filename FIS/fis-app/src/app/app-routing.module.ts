import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstrumentContainerComponent } from './instruments/container/instrument-container.component';
import { PortfoliosComponent} from './portfolios/portfolios.component';

const routes: Routes = [
  { path: '', redirectTo: '/instruments', pathMatch: 'full'},
  { path: 'instruments', component: InstrumentContainerComponent},
  { path: 'portfolios', component: PortfoliosComponent}
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
