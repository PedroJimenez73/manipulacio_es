import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P10Component } from './diapo-s9-p10.component';

describe('DiapoS9P10Component', () => {
  let component: DiapoS9P10Component;
  let fixture: ComponentFixture<DiapoS9P10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
