import {Injectable} from '@angular/core';
import * as _ from 'underscore';

import {Portfolio} from './portfolio';
import {InstrumentService} from '../instruments/instrument.service';
import { Deal, Direction } from '../deal/deal';
import { Position } from './position';


@Injectable()
export class PortfolioServiceMock {

  DeutscheBank = 'Deutsche Bank';
  Unicredit = 'Unicredit';
  BankOfChina = 'Bank of China';

  constructor(private instrumentService: InstrumentService) {

  }

  public generate() {
    const portfolios = new Map<string, Portfolio>();
    const db = new Portfolio('Deutsche Bank', undefined);
    const uc = new Portfolio('Unicredit', undefined);
    portfolios.set(db.name, db);
    portfolios.set(uc.name, uc);

    const instrumentService = new InstrumentService();
    const ibm = _(instrumentService.get()).find(i => i.name === 'IBM');
    const msft = _(instrumentService.get()).find(i => i.name === 'MSFT');
    const abb = _(instrumentService.get()).find(i => i.name === 'ABB');
    const eric = _(instrumentService.get()).find(i => i.name === 'ERIC');

    const d1 = new Deal(ibm, this.DeutscheBank, Direction.Long, ibm.price, 100, new Date(Date.now()),
      this.DeutscheBank, this.Unicredit, 'NYSE');
    const d2 = new Deal(ibm, this.DeutscheBank, Direction.Long, ibm.price + 5, 200, new Date(Date.now()),
      this.DeutscheBank, this.Unicredit, 'NYSE');
    const d3 = new Deal(ibm, this.DeutscheBank, Direction.Short, ibm.price + 10, 100, new Date(Date.now()),
      this.DeutscheBank, this.BankOfChina, 'NYSE');
    const d4 = new Deal(ibm, this.DeutscheBank, Direction.Short, ibm.price + 11, 100, new Date(Date.now()),
      this.DeutscheBank, this.BankOfChina, 'NYSE');
    db.positions.push(new Position(d1, undefined));
    db.positions.push(new Position(d2, undefined));
    db.positions.push(new Position(d3, undefined));
    db.positions.push(new Position(d4, undefined));

    const d5 = new Deal(abb, this.DeutscheBank, Direction.Short, abb.price + 2.2, 100, new Date(Date.now()),
      this.DeutscheBank, this.BankOfChina, 'OMX');
    const d6 = new Deal(abb, this.DeutscheBank, Direction.Short, abb.price + 2.2, 100, new Date(Date.now()),
      this.DeutscheBank, this.BankOfChina, 'OMX');
    db.positions.push(new Position(d5, undefined));
    db.positions.push(new Position(d6, undefined));

    const d10 = new Deal(abb, this.Unicredit, Direction.Long, abb.price - 1.5, 10000, new Date(Date.now()),
      this.Unicredit, this.BankOfChina, 'OMX');
    const d11 = new Deal(msft, this.Unicredit, Direction.Long, msft.price - 0.12, 20000, new Date(Date.now()),
      this.Unicredit, this.BankOfChina, 'NYSE');
    uc.positions.push(new Position(d10, undefined));
    uc.positions.push(new Position(d11, undefined));

    return portfolios;
  }

  private _generatePositions() {


  }

}
