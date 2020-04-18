import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS6P2Component } from './diapo-s6-p2.component';

describe('DiapoS6P2Component', () => {
  let component: DiapoS6P2Component;
  let fixture: ComponentFixture<DiapoS6P2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS6P2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS6P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
