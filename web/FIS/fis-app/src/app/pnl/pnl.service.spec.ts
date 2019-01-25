import { TestBed, inject } from '@angular/core/testing';

import { PnlService } from './pnl.service';

describe('PnlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PnlService]
    });
  });

  it('should be created', inject([PnlService], (service: PnlService) => {
    expect(service).toBeTruthy();
  }));
});
