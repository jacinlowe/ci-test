import { TestBed } from '@angular/core/testing';

import { LoginUtilityService } from './login-utility.service';

describe('LoginUtilityService', () => {
  let service: LoginUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
