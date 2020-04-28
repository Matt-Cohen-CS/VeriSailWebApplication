import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoatOwnersComponent } from './create-boat-owners.component';

describe('CreateBoatOwnersComponent', () => {
  let component: CreateBoatOwnersComponent;
  let fixture: ComponentFixture<CreateBoatOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBoatOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoatOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
