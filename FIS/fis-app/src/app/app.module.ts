import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { InstrumentService } from './instruments/instrument.service';
import { DealComponent } from './deal/deal.component';
import { AppRoutingModule } from './/app-routing.module';
import { PortfoliosComponent } from './portfolios/portfolios.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    DealComponent,
    PortfoliosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [InstrumentService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
