import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoatOwnersComponent } from './update-boat-owners.component';

describe('UpdateBoatOwnersComponent', () => {
  let component: UpdateBoatOwnersComponent;
  let fixture: ComponentFixture<UpdateBoatOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBoatOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBoatOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
