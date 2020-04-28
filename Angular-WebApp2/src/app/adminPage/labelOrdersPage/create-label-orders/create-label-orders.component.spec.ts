import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLabelOrdersComponent } from './create-label-orders.component';

describe('CreateLabelOrdersComponent', () => {
  let component: CreateLabelOrdersComponent;
  let fixture: ComponentFixture<CreateLabelOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLabelOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLabelOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
