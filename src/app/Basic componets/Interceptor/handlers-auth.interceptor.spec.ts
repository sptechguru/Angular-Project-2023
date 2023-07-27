import { TestBed } from '@angular/core/testing';

import { HandlersAuthInterceptor } from './handlers-auth.interceptor';

describe('HandlersAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HandlersAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HandlersAuthInterceptor = TestBed.inject(HandlersAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
