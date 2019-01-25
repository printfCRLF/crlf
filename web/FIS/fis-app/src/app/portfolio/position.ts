import { Deal, Direction } from '../deal/deal';
import { PnL } from '../pnl/pnl';

export class Position extends Deal {

  constructor(public deal: Deal,
              public pnl: PnL) {
    super(deal.instrument,
      deal.portfolioName,
      deal.direction,
      deal.price,
      deal.quantity,
      deal.tradeTime,
      deal.acquirer,
      deal.counterParty,
      deal.marketPlace);
  }

}
