import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateadminComponent } from './templateadmin.component';

describe('TemplateadminComponent', () => {
  let component: TemplateadminComponent;
  let fixture: ComponentFixture<TemplateadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
