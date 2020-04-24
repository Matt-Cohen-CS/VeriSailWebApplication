import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDistributorsComponent } from './update-distributors.component';

describe('UpdateDistributorsComponent', () => {
  let component: UpdateDistributorsComponent;
  let fixture: ComponentFixture<UpdateDistributorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDistributorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
