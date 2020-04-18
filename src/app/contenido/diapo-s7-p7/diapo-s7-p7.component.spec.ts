import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P7Component } from './diapo-s7-p7.component';

describe('DiapoS7P7Component', () => {
  let component: DiapoS7P7Component;
  let fixture: ComponentFixture<DiapoS7P7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
