import { TestBed } from '@angular/core/testing';

import { DatosCambioService } from './datos-cambio.service';

describe('DatosCambioService', () => {
  let service: DatosCambioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosCambioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
