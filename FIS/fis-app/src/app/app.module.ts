import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { InstrumentService } from './instruments/instrument.service';
import { DealComponent } from './deal/deal.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    DealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [InstrumentService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
