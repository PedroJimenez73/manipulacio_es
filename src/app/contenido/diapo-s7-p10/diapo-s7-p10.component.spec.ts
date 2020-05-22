import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P10Component } from './diapo-s7-p10.component';

describe('DiapoS7P10Component', () => {
  let component: DiapoS7P10Component;
  let fixture: ComponentFixture<DiapoS7P10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
