import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P8Component } from './diapo-s8-p8.component';

describe('DiapoS8P8Component', () => {
  let component: DiapoS8P8Component;
  let fixture: ComponentFixture<DiapoS8P8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
