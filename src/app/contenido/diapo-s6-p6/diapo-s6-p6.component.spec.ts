import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS6P6Component } from './diapo-s6-p6.component';

describe('DiapoS6P6Component', () => {
  let component: DiapoS6P6Component;
  let fixture: ComponentFixture<DiapoS6P6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS6P6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS6P6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
