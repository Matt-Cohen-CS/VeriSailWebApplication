import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInspectionsComponent } from './event-inspections.component';

describe('EventInspectionsComponent', () => {
  let component: EventInspectionsComponent;
  let fixture: ComponentFixture<EventInspectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventInspectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
