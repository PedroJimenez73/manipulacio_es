import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P2Component } from './diapo-s7-p2.component';

describe('DiapoS7P2Component', () => {
  let component: DiapoS7P2Component;
  let fixture: ComponentFixture<DiapoS7P2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
