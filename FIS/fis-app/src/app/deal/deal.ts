import { Instrument } from '../instruments/instrument';

export class Deal {
  constructor(public instrument: Instrument, public portfolioName: string,
              public price: number, public quantity: number, public tradeTime: Date,
              public acquirer: string, public counterParty: string, public marketPlace: string) {

  }
}


