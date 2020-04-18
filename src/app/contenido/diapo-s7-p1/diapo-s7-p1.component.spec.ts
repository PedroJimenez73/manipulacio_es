import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P1Component } from './diapo-s7-p1.component';

describe('DiapoS7P1Component', () => {
  let component: DiapoS7P1Component;
  let fixture: ComponentFixture<DiapoS7P1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
