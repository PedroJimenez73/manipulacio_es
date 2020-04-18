import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P8Component } from './diapo-s7-p8.component';

describe('DiapoS7P8Component', () => {
  let component: DiapoS7P8Component;
  let fixture: ComponentFixture<DiapoS7P8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
