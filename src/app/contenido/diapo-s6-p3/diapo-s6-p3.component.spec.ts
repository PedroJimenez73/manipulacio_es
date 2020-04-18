import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS6P3Component } from './diapo-s6-p3.component';

describe('DiapoS6P3Component', () => {
  let component: DiapoS6P3Component;
  let fixture: ComponentFixture<DiapoS6P3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS6P3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS6P3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
