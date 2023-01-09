import { TestBed } from '@angular/core/testing';

import { CentroDeTrabajoService } from './centro-de-trabajo.service';

describe('CentroDeTrabajoService', () => {
  let service: CentroDeTrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroDeTrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
