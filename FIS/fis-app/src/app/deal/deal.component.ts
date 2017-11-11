import { Component, OnInit, Input,
  OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { Instrument } from '../instruments/instrument';
import { Deal } from '../deal/deal';
import * as _ from 'underscore';
import { PortfolioService} from '../portfolio/portfolio.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class DealComponent implements OnInit, OnChanges {

  public deal: Deal;

  @Input() instrument: Instrument;


  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const instrument: SimpleChange = changes.instrument;
    this.deal = new Deal(instrument.currentValue, 'Deutsche Bank', 100.0, 1, new Date(Date.now()), 'Equity Desk', 'Deutsche Bank', 'OMX');
  }

  placeDeal(): void {
    this.portfolioService.add(this.deal);
  }

}
