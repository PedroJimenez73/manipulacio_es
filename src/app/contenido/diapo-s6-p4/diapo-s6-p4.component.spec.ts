import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS6P4Component } from './diapo-s6-p4.component';

describe('DiapoS6P4Component', () => {
  let component: DiapoS6P4Component;
  let fixture: ComponentFixture<DiapoS6P4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS6P4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS6P4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
