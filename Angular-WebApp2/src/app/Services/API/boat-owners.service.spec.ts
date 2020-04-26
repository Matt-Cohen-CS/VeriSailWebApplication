import { TestBed } from '@angular/core/testing';

import { BoatOwnersService } from './boat-owners.service';

describe('BoatOwnersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoatOwnersService = TestBed.get(BoatOwnersService);
    expect(service).toBeTruthy();
  });
});
