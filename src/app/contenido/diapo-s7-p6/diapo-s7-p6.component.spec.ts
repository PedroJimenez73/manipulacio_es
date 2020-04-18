import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P6Component } from './diapo-s7-p6.component';

describe('DiapoS7P6Component', () => {
  let component: DiapoS7P6Component;
  let fixture: ComponentFixture<DiapoS7P6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
