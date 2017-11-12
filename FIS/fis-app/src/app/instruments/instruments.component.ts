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

  instruments: Instrument[];

  selectedInstrument: Instrument;

  constructor(private instrumentService: InstrumentService ) {

  }

  getInstruments(): void {
    this.instruments = this.instrumentService.get();
  }

  onSelect(instrument: Instrument): void {
    this.selectedInstrument = instrument;
  }

  ngOnInit() {
    this.getInstruments();
  }

}
