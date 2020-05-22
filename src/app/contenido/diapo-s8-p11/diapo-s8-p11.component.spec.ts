import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P11Component } from './diapo-s8-p11.component';

describe('DiapoS8P11Component', () => {
  let component: DiapoS8P11Component;
  let fixture: ComponentFixture<DiapoS8P11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
