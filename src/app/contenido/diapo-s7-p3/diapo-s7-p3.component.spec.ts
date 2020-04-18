import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P3Component } from './diapo-s7-p3.component';

describe('DiapoS7P3Component', () => {
  let component: DiapoS7P3Component;
  let fixture: ComponentFixture<DiapoS7P3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
