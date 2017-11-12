import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { InstrumentContainerComponent } from './instruments/container/instrument-container.component';
import { InstrumentService } from './instruments/instrument.service';
import { DealComponent } from './deal/deal.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { PortfolioService } from './portfolio/portfolio.service';
import {KeyValuePipe} from './portfolios/pipe';
import { InstrumentAddComponent } from './instruments/add/instrument-add.component';
import { InstrumentListComponent } from './instruments/list/instrument-list.component';
import { CurrencyDropdownComponent } from './currency-dropdown/currency-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentContainerComponent,
    DealComponent,
    PortfoliosComponent,
    KeyValuePipe,
    InstrumentAddComponent,
    InstrumentListComponent,
    CurrencyDropdownComponent
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
