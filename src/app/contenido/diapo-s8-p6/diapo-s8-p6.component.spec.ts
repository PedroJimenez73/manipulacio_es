import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P6Component } from './diapo-s8-p6.component';

describe('DiapoS8P6Component', () => {
  let component: DiapoS8P6Component;
  let fixture: ComponentFixture<DiapoS8P6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
