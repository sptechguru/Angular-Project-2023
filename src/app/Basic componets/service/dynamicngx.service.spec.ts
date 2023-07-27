import { TestBed } from '@angular/core/testing';

import { DynamicngxService } from './dynamicngx.service';

describe('DynamicngxService', () => {
  let service: DynamicngxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicngxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
