import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P12Component } from './diapo-s8-p12.component';

describe('DiapoS8P12Component', () => {
  let component: DiapoS8P12Component;
  let fixture: ComponentFixture<DiapoS8P12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
