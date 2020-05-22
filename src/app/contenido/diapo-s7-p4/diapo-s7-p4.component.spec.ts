import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P4Component } from './diapo-s7-p4.component';

describe('DiapoS7P4Component', () => {
  let component: DiapoS7P4Component;
  let fixture: ComponentFixture<DiapoS7P4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
