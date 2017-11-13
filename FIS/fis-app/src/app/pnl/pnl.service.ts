import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { InstrumentService} from '../instruments/instrument.service';
import { Direction } from '../deal/deal';
import { Position } from '../portfolio/position';
import { PnL } from './pnl';
import { Portfolio } from '../portfolio/portfolio';


@Injectable()
export class PnLService {

  constructor(private instrumentService: InstrumentService) { }

  public calculatePosition(position: Position): PnL {
    const marketPrice = this.instrumentService.getPrice(position.instrument.id);
    const d =  position.direction === Direction.Long ? 1 : -1;
    const upl = (marketPrice - position.price) * position.quantity * d;
    return new PnL(upl, 0.0);
  }

  public calculatePortfolio(portfolio: Portfolio): PnL {
    const upl = _(portfolio.positions).reduce(((memo, position ) => {
      return memo + position.pnl.upl;
    }), 0.0);

    const rpl = _(portfolio.positions).reduce(((memo, position ) => {
      return memo + position.pnl.rpl;
    }), 0.0);

    return new PnL(upl, rpl);
  }


}
