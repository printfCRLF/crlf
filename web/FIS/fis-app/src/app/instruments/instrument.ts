import { Currency } from './currency';

export class Instrument {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public issuer: string,
    public currency: Currency) {
  }
}
