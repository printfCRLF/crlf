import { Injectable } from '@angular/core';
import { Currency } from './currency';
import { Instrument } from './instrument';
import * as _ from 'underscore';

@Injectable()
export class InstrumentService {

  instruments: Instrument[] = [];

  constructor() {
    this.instruments.push(new Instrument(100, 'IBM', 145.0, 'Asea Brown Boveri', Currency.USD));
    this.instruments.push(new Instrument(101, 'MSFT', 60.45, 'Goldman Sachs', Currency.USD));
    this.instruments.push(new Instrument(201, 'ABB', 201.40, 'Lundbergs företag', Currency.EURO));
    this.instruments.push(new Instrument(202, 'ERIC', 33.33, 'Lundbergs företag', Currency.SEK));
  }

  public get(): Instrument[] {
    return this.instruments;
  }

  public add(instrument: Instrument): void {
    instrument.id = this._generateId();
    this.instruments.push(instrument);
  }

  public getPrice(instrumentId: number): number {
    const inst = _(this.instruments).find(ins => ins.id === instrumentId);
    if (!inst) {
      throw new Error(`Cannot find instrumentId${instrumentId}`);
    }
    return inst.price;
  }

  public update(instrumentId: number, price: number): boolean {
    const inst = _(this.instruments).find(ins => ins.id === instrumentId);
    if (!inst) {
      return false;
    }
    inst.price = price;
    return true;
  }

  private _generateId(): number {
    const ids = _(this.instruments).pluck('id');
    return _.max(ids) + 1;
  }

}
