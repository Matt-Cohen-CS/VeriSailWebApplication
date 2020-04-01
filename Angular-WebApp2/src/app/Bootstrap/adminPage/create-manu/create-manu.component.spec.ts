import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManuComponent } from './create-manu.component';

describe('CreateManuComponent', () => {
  let component: CreateManuComponent;
  let fixture: ComponentFixture<CreateManuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
