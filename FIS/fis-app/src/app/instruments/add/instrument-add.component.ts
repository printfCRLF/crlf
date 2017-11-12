import { Component, OnInit } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentService} from '../instrument.service';

@Component({
  selector: 'app-instrument-add',
  templateUrl: './instrument-add.component.html',
  styleUrls: ['./instrument-add.component.css'],
})
export class InstrumentAddComponent implements OnInit {

  instrument: Instrument = { id: 100, name : 'IBM', issuer : 'NYSE', currency: 'USD'};

  constructor(private instrumentService: InstrumentService ) {

  }

  ngOnInit() {
  }

  add(instrument: Instrument): void {
    this.instrumentService.add(instrument);
  }

}
