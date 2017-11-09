import { Injectable } from '@angular/core';
import { Instrument } from './instrument';


@Injectable()
export class InstrumentService {

  instruments: Instrument[];

  constructor() {
    this.instruments.push(new Instrument(100, 'IBM', 'NYSE', 'USD'));
    this.instruments.push(new Instrument(101, 'MSFT', 'NYSE', 'USD'));
    this.instruments.push(new Instrument(201, 'ABB', 'OMX', 'SEK'));
    this.instruments.push(new Instrument(202, 'ERIC', 'OMX', 'SEK'));
  }

  get(): Instrument[] {
    return this.instruments;
  }

  add(instrument: Instrument): void {
    this.instruments.push(instrument);
  }
}
