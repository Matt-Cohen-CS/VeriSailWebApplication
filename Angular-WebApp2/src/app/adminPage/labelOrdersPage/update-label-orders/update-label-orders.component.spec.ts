import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLabelOrdersComponent } from './update-label-orders.component';

describe('UpdateLabelOrdersComponent', () => {
  let component: UpdateLabelOrdersComponent;
  let fixture: ComponentFixture<UpdateLabelOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLabelOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLabelOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
