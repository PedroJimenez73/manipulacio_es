import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS10P1Component } from './diapo-s10-p1.component';

describe('DiapoS10P1Component', () => {
  let component: DiapoS10P1Component;
  let fixture: ComponentFixture<DiapoS10P1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS10P1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS10P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
