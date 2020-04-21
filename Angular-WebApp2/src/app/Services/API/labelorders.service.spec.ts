import { TestBed } from '@angular/core/testing';

import { LabelordersService } from './labelorders.service';

describe('LabelordersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabelordersService = TestBed.get(LabelordersService);
    expect(service).toBeTruthy();
  });
});
