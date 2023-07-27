import { TestBed } from '@angular/core/testing';

import { TestappService } from './testapp.service';

describe('TestappService', () => {
  let service: TestappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
