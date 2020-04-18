import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P4Component } from './diapo-s8-p4.component';

describe('DiapoS8P4Component', () => {
  let component: DiapoS8P4Component;
  let fixture: ComponentFixture<DiapoS8P4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
