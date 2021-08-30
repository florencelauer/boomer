import { TestBed } from '@angular/core/testing';

import { BoomerService } from './boomer.service';

describe('BoomerService', () => {
  let service: BoomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
