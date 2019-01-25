import { Instrument } from '../instruments/instrument';

export class Deal {
  constructor(
    public instrument: Instrument,
    public portfolioName: string,
    public direction: Direction,
    public price: number,
    public quantity: number,
    public tradeTime: Date,
    public acquirer: string,
    public counterParty: string,
    public marketPlace: string) {
  }
}

export enum Direction {
  Long = 'Long',
  Short = 'Short'
}

