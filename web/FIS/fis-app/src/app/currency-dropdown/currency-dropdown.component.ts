import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Currency } from '../instruments/currency';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.css'],
})
export class CurrencyDropdownComponent implements OnInit {

  options: string[];
  @Input() currency: Currency;
  @Output() onSelected = new EventEmitter<Currency>();

  constructor() { }

  ngOnInit() {
    const options = Object.keys(Currency);
    this.options = options.slice();
  }

  parseValue(value: string) {
    this.currency = Currency[value];
    this.onSelected.emit(this.currency);
  }
}
