import { TestBed } from '@angular/core/testing';

import { TipoproveedorService } from './tipoproveedor.service';

describe('TipoproveedorService', () => {
  let service: TipoproveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoproveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
