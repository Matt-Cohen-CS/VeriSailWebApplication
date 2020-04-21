import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelOrdersComponent } from './label-orders.component';

describe('LabelOrdersComponent', () => {
  let component: LabelOrdersComponent;
  let fixture: ComponentFixture<LabelOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
