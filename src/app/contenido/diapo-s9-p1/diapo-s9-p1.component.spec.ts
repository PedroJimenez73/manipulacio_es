import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P1Component } from './diapo-s9-p1.component';

describe('DiapoS9P1Component', () => {
  let component: DiapoS9P1Component;
  let fixture: ComponentFixture<DiapoS9P1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
