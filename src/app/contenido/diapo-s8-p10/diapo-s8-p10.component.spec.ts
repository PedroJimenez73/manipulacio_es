import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P10Component } from './diapo-s8-p10.component';

describe('DiapoS8P10Component', () => {
  let component: DiapoS8P10Component;
  let fixture: ComponentFixture<DiapoS8P10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
