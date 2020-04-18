import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P14Component } from './diapo-s8-p14.component';

describe('DiapoS8P14Component', () => {
  let component: DiapoS8P14Component;
  let fixture: ComponentFixture<DiapoS8P14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
