import { Injectable } from '@angular/core';
import { Deal } from '../deal/deal';
import { Position } from './position';
import { Portfolio } from './portfolio';

import * as _ from 'underscore';

@Injectable()
export class PortfolioService {

  public portfolios: Map<string, Portfolio> = new Map();

  constructor() {
    const db = new Portfolio('Deutsche Bank');
    const uc = new Portfolio('Unicredit');
    this.portfolios.set(db.name, db);
    this.portfolios.set(uc.name, uc);
  }

  public add(deal: Deal): void {
    const p = this._getOrCreate(deal.portfolioName);
    p.positions.push(deal);
  }

  private _getOrCreate(name) {
    if (!this.portfolios.has(name)) {
      const p = new Portfolio(name);
      this.portfolios.set(p.name, p);
    }
    return this.portfolios.get(name);
  }

}
