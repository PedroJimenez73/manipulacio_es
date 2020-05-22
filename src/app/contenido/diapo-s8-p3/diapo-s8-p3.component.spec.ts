import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P3Component } from './diapo-s8-p3.component';

describe('DiapoS8P3Component', () => {
  let component: DiapoS8P3Component;
  let fixture: ComponentFixture<DiapoS8P3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
