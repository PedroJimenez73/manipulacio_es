import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P7Component } from './diapo-s8-p7.component';

describe('DiapoS8P7Component', () => {
  let component: DiapoS8P7Component;
  let fixture: ComponentFixture<DiapoS8P7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
