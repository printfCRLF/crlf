import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
import { Instrument } from '../instrument';
import { InstrumentService} from '../instrument.service';

@Component({
  selector: 'app-instrument-add',
  templateUrl: './instrument-add.component.html',
  styleUrls: ['./instrument-add.component.css'],
})
export class InstrumentAddComponent implements OnInit {

  // instrument: Instrument = { id: 100, name : 'IBM', issuer : 'NYSE', currency: Currency.USD};
  instrument: Instrument = new Instrument(-1, 'AMAZ', 1014.22, 'NYSE', Currency.USD);

  constructor(private instrumentService: InstrumentService ) {

  }

  ngOnInit() {
  }

  add(instrument: Instrument) {
    const copy = { ...instrument };
    this.instrumentService.add(copy);
  }

  currencySelected(currency: Currency) {
    this.instrument.currency = currency;
  }

}
