import { Position } from './position';
import { PnL } from '../pnl/pnl';

export class Portfolio {

  positions: Position[] = [];

  private _name = 'My portfolio';

  constructor(
    public name: string,
    public pnl: PnL) {

    this._name = name;
  }

  add(position: Position) {
    this.positions.push(position);
  }


}
