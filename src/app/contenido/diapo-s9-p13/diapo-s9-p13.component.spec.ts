import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P13Component } from './diapo-s9-p13.component';

describe('DiapoS9P13Component', () => {
  let component: DiapoS9P13Component;
  let fixture: ComponentFixture<DiapoS9P13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
