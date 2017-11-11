import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { InstrumentsComponent } from './instruments/instruments.component';
import { InstrumentService } from './instruments/instrument.service';
import { DealComponent } from './deal/deal.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { PortfolioService } from './portfolio/portfolio.service';
import {KeyValuePipe} from './portfolios/pipe';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    DealComponent,
    PortfoliosComponent,
    KeyValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [InstrumentService, PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule { }
