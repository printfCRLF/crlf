import { Component, OnInit } from '@angular/core';
import { Instrument } from './instrument';
import { InstrumentService} from './instrument.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css'],
  // encapsulation: ViewEncapsulation.None
})

export class InstrumentsComponent implements OnInit {

  instrument: Instrument = { id: 100, name : 'IBM', issuer : 'NYSE', currency: 'USD'};

  instruments: Instrument[];

  selectedInstrument: Instrument;

  constructor(private instrumentService: InstrumentService ) {

  }

  getInstruments(): void {
    this.instruments = this.instrumentService.get();
  }

  add(instrument: Instrument): void {
    this.instrumentService.add(instrument);
  }

  onSelect(instrument: Instrument): void {
    this.selectedInstrument = instrument;
  }

  ngOnInit() {
    this.getInstruments();
  }

}
