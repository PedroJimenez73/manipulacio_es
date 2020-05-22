import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P13Component } from './diapo-s8-p13.component';

describe('DiapoS8P13Component', () => {
  let component: DiapoS8P13Component;
  let fixture: ComponentFixture<DiapoS8P13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
