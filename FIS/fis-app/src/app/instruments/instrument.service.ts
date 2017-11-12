import { Injectable } from '@angular/core';
import { Currency } from './currency';
import { Instrument } from './instrument';
import * as _ from 'underscore';

@Injectable()
export class InstrumentService {

  instruments: Instrument[] = [];

  constructor() {
    this.instruments.push(new Instrument(100, 'IBM', 'Asea Brown Boveri', Currency.USD));
    this.instruments.push(new Instrument(101, 'MSFT', 'Goldman Sachs', Currency.USD));
    this.instruments.push(new Instrument(201, 'ABB', 'Lundbergs företag', Currency.EURO));
    this.instruments.push(new Instrument(202, 'ERIC', 'Lundbergs företag', Currency.SEK));
  }

  get(): Instrument[] {
    return this.instruments;
  }

  add(instrument: Instrument): void {
    instrument.id = this._generateId();
    this.instruments.push(instrument);
  }

  _generateId(): number {
    const ids = _(this.instruments).pluck('id');
    return _.max(ids) + 1;
  }

}
