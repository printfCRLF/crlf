import { TestBed, inject } from '@angular/core/testing';
import * as _ from 'underscore';

import { PortfolioService } from './portfolio.service';
import { InstrumentService } from '../instruments/instrument.service';

import { Deal } from '../deal/deal';

describe('PortfolioService', () => {
  const DeutscheBank = 'Deutsche Bank';
  const Unicredit = 'Unicredit';
  const BankOfChina = 'Bank of China';

  const instrumentService = new InstrumentService();
  const ibm = _(instrumentService.get()).find(i => i.name === 'IBM');
  const msft = _(instrumentService.get()).find(i => i.name === 'MSFT');
  const abb = _(instrumentService.get()).find(i => i.name === 'ABB');
  const eric = _(instrumentService.get()).find(i => i.name === 'ERIC');


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioService]
    });
});

  it('should be created', inject([PortfolioService], (service: PortfolioService) => {
    expect(service.portfolios.has(DeutscheBank)).toBeTruthy();
    expect(service.portfolios.has(Unicredit)).toBeTruthy();
  }));

  describe('Execute method', () => {
    it('should place Deutsch Bank deal in Deutsche Bank portfolio', inject([PortfolioService],
      (service: PortfolioService) => {

      const d1 = new Deal(ibm, DeutscheBank, 145.0, 1000, new Date(Date.now()), DeutscheBank, 'Bank of China', 'OMX');
      const d2 = new Deal(msft, DeutscheBank, 60.6, 2000, new Date(Date.now()), DeutscheBank, 'Swedbank', 'OMX');
      service.add(d1);
      service.add(d2);
      const positions = service.portfolios.get(DeutscheBank).positions;

      expect(_(positions).find(p => p.instrument.name === ibm.name)).toBeDefined();
      expect(_(positions).find(p => p.instrument.name === msft.name)).toBeDefined();
    }));

    it('should place Bank of China deal in a new portfolio', inject([PortfolioService],
      (service: PortfolioService) => {
      const d1 = new Deal(ibm, BankOfChina, 145.0, 1000, new Date(Date.now()), BankOfChina, 'Bank of China', 'OMX');
      const d2 = new Deal(msft, BankOfChina, 60.6, 2000, new Date(Date.now()), BankOfChina, 'Swedbank', 'OMX');
      service.add(d1);
      service.add(d2);
      const positions = service.portfolios.get(BankOfChina).positions;

      expect(_(positions).find(p => p.instrument.name === ibm.name)).toBeDefined();
      expect(_(positions).find(p => p.instrument.name === msft.name)).toBeDefined();
      }));
  });

});
