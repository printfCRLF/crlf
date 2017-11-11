import { Injectable } from '@angular/core';
import { Deal } from '../deal/deal';
import { Position} from './position';
import { Portfolio} from './portfolio';

@Injectable()
export class PortfolioService {

  portfolios: Portfolio[] = [];

  constructor() { }

  execute(deal: Deal): void {


  }

}
