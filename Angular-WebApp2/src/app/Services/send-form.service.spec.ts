import { TestBed } from '@angular/core/testing';

import { SendFormService } from './send-form.service';

describe('SendFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendFormService = TestBed.get(SendFormService);
    expect(service).toBeTruthy();
  });
});
