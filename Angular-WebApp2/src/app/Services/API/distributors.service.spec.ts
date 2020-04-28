import { TestBed } from '@angular/core/testing';

import { DistributorsService } from './distributors.service';

describe('DistributorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistributorsService = TestBed.get(DistributorsService);
    expect(service).toBeTruthy();
  });
});
