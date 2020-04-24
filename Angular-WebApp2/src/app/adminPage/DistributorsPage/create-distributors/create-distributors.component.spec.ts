import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDistributorsComponent } from './create-distributors.component';

describe('CreateDistributorsComponent', () => {
  let component: CreateDistributorsComponent;
  let fixture: ComponentFixture<CreateDistributorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDistributorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
