import { TestBed } from '@angular/core/testing';

import { CryptoGraphyService } from './crypto-graphy.service';

describe('CryptoGraphyService', () => {
  let service: CryptoGraphyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoGraphyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
