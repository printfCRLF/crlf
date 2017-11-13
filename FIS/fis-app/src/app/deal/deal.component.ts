import { Component, OnInit, Input,
  OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import * as _ from 'underscore';

import { Instrument } from '../instruments/instrument';
import { Deal, Direction } from '../deal/deal';
import { PortfolioService} from '../portfolio/portfolio.service';
import { InstrumentService} from '../instruments/instrument.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class DealComponent implements OnInit, OnChanges {

  public deal: Deal;

  @Input() instrument: Instrument;


  constructor(private portfolioService: PortfolioService,
              private instrumentService: InstrumentService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const instrument = changes.instrument.currentValue;
    if (!instrument) {
      return;
    }
    this.deal = new Deal(instrument, 'Deutsche Bank', Direction.Long, instrument.price, 100,
      new Date(Date.now()), 'Equity Desk', 'Deutsche Bank', 'OMX');
  }

  clickLong() {
    this.deal.direction = Direction.Long;
  }

  clickShort() {
    this.deal.direction = Direction.Short;
  }

  placeDeal(): void {
    this.instrumentService.update(this.deal.instrument.id, this.deal.price);
    this.portfolioService.add(this.deal);
  }

}
