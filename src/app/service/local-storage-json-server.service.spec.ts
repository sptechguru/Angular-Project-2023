import { TestBed } from '@angular/core/testing';

import { LocalStorageJsonServerService } from './local-storage-json-server.service';

describe('LocalStorageJsonServerService', () => {
  let service: LocalStorageJsonServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageJsonServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
