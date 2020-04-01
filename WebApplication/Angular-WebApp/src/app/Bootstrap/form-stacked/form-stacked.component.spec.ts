import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStackedComponent } from './form-stacked.component';

describe('FormStackedComponent', () => {
  let component: FormStackedComponent;
  let fixture: ComponentFixture<FormStackedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStackedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
