import { Component, OnInit } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentService} from '../instrument.service';

@Component({
  selector: 'app-instrument-container',
  templateUrl: './instrument-container.component.html',
  styleUrls: ['./instrument-container.component.css'],
  // encapsulation: ViewEncapsulation.None
})

export class InstrumentContainerComponent implements OnInit {
  selectedInstrument: Instrument;

  constructor(private instrumentService: InstrumentService ) {

  }

  onSelected(instrument: Instrument) {
    this.selectedInstrument = instrument;
  }

  ngOnInit() { }

}
