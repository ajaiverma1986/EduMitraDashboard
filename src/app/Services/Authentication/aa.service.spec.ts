import { TestBed } from '@angular/core/testing';

import { AAService } from './aa.service';

describe('AAService', () => {
  let service: AAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
