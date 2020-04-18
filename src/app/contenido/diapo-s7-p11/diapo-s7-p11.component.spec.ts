import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P11Component } from './diapo-s7-p11.component';

describe('DiapoS7P11Component', () => {
  let component: DiapoS7P11Component;
  let fixture: ComponentFixture<DiapoS7P11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
