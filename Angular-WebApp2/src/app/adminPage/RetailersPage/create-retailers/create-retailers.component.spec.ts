import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRetailersComponent } from './create-retailers.component';

describe('CreateRetailersComponent', () => {
  let component: CreateRetailersComponent;
  let fixture: ComponentFixture<CreateRetailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRetailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
