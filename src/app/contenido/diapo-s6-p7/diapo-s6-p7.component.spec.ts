import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS6P7Component } from './diapo-s6-p7.component';

describe('DiapoS6P7Component', () => {
  let component: DiapoS6P7Component;
  let fixture: ComponentFixture<DiapoS6P7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS6P7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS6P7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
