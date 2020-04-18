import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P2Component } from './diapo-s8-p2.component';

describe('DiapoS8P2Component', () => {
  let component: DiapoS8P2Component;
  let fixture: ComponentFixture<DiapoS8P2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
