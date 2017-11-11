import { Injectable } from '@angular/core';
import { Instrument } from './instrument';


@Injectable()
export class InstrumentService {

  instruments: Instrument[] = [];

  constructor() {
    this.instruments.push(new Instrument(100, 'IBM', 'Asea Brown Boveri', 'USD'));
    this.instruments.push(new Instrument(101, 'MSFT', 'Goldman Sachs', 'USD'));
    this.instruments.push(new Instrument(201, 'ABB', 'Lundbergs företag', 'SEK'));
    this.instruments.push(new Instrument(202, 'ERIC', 'Lundbergs företag', 'SEK'));
  }

  get(): Instrument[] {
    return this.instruments;
  }

  add(instrument: Instrument): void {
    this.instruments.push(instrument);
  }
}
