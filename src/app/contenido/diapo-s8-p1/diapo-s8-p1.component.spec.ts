import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P1Component } from './diapo-s8-p1.component';

describe('DiapoS8P1Component', () => {
  let component: DiapoS8P1Component;
  let fixture: ComponentFixture<DiapoS8P1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
