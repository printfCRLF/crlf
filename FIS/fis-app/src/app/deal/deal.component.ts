import { Component, OnInit, Input,
  OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { Instrument } from '../instruments/instrument';
import { Deal } from '../deal/deal';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class DealComponent implements OnInit, OnChanges {

  public deal: Deal;

  @Input() instrument: Instrument;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const instrument: SimpleChange = changes.instrument;
    this.deal = new Deal(instrument.currentValue, 100.0, 1, new Date(Date.now()), 'Equity Desk', 'Deutsche Bank', 'OMX');
  }

  placeDeal(): void {
    console.log('Deal placed' + this.deal);
  }

}
