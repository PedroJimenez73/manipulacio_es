import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS6P1Component } from './diapo-s6-p1.component';

describe('DiapoS6P1Component', () => {
  let component: DiapoS6P1Component;
  let fixture: ComponentFixture<DiapoS6P1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS6P1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS6P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
