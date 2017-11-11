import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {PortfolioService} from '../portfolio/portfolio.service';
import {Portfolio} from '../portfolio/portfolio';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css'],
})

export class PortfoliosComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
  }

  public portfolios() {
    return this.portfolioService.portfolios;
  }



}

