import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateretailersComponent } from './updateretailers.component';

describe('UpdateretailersComponent', () => {
  let component: UpdateretailersComponent;
  let fixture: ComponentFixture<UpdateretailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateretailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateretailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
