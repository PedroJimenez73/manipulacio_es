import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS10P2Component } from './diapo-s10-p2.component';

describe('DiapoS10P2Component', () => {
  let component: DiapoS10P2Component;
  let fixture: ComponentFixture<DiapoS10P2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS10P2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS10P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
