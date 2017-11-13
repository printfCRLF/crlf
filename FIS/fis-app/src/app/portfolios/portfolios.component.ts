import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {PortfolioService} from '../portfolio/portfolio.service';
import {Portfolio} from '../portfolio/portfolio';
import {InstrumentService} from '../instruments/instrument.service';
import {PnLService} from '../pnl/pnl.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css'],
})

export class PortfoliosComponent implements OnInit {

  constructor(private portfolioService: PortfolioService,
              private instrumentService: InstrumentService,
              private pnlService: PnLService) {
  }

  ngOnInit() {
  }

  public portfolios() {
    this._calculatePnL();
    return this.portfolioService.portfolios;
  }

  public getMarketPrice(instrumentId: number): number {
    return this.instrumentService.getPrice(instrumentId);
  }

  private _calculatePnL() {
    this.portfolioService.portfolios.forEach((port, key, map) => {
      for (const position of port.positions ) {
        position.pnl = this.pnlService.calculatePosition(position);
      }

      port.pnl = this.pnlService.calculatePortfolio(port);
    });
  }

}

