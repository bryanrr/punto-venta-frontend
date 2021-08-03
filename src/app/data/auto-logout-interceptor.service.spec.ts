import { TestBed } from '@angular/core/testing';

import { AutoLogoutInterceptorService } from './auto-logout-interceptor.service';

describe('AutoLogoutInterceptorService', () => {
  let service: AutoLogoutInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoLogoutInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
