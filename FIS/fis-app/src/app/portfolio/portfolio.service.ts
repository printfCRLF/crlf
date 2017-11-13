import { Injectable } from '@angular/core';
import { Deal } from '../deal/deal';
import { Position } from './position';
import { Portfolio } from './portfolio';
import { PortfolioServiceMock} from './portfolio.service.mock';
import * as _ from 'underscore';

@Injectable()
export class PortfolioService {

  public portfolios: Map<string, Portfolio>;

  constructor(private mock: PortfolioServiceMock ) {
    this.portfolios = new Map<string, Portfolio>();
  }

  private _generatePort() {
    const db = new Portfolio('Deutsche Bank', undefined);
    const uc = new Portfolio('Unicredit', undefined);
    this.portfolios.set(db.name, db);
    this.portfolios.set(uc.name, uc);
  }

  public load() {
    this.portfolios = this.mock.generate();
  }

  public reset() {
    this.portfolios = new Map<string, Portfolio>();
  }

  public add(deal: Deal): void {
    const port = this._getOrCreate(deal.portfolioName);
    const position = new Position(deal, undefined);
    port.positions.push(position);
  }

  private _getOrCreate(name) {
    if (!this.portfolios.has(name)) {
      const p = new Portfolio(name, undefined);
      this.portfolios.set(p.name, p);
    }
    return this.portfolios.get(name);
  }

}
