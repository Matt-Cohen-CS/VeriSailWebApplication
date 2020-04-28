import { TestBed } from '@angular/core/testing';

import { EventInspectionsService } from './event-inspections.service';

describe('EventInspectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventInspectionsService = TestBed.get(EventInspectionsService);
    expect(service).toBeTruthy();
  });
});
