import { Component, OnInit, Input } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentService} from '../instrument.service';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css'],
})
export class InstrumentListComponent implements OnInit {

  instruments: Instrument[];

  @Input() selectedInstrument: Instrument;

  constructor(private instrumentService: InstrumentService ) {

  }

  getInstruments(): void {
    this.instruments = this.instrumentService.get();
  }

  onSelect(instrument: Instrument): void {
    this.selectedInstrument = instrument;
  }

  ngOnInit() {
    this.getInstruments();
  }

}
