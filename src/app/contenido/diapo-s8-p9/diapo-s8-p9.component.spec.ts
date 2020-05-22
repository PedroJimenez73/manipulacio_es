import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P9Component } from './diapo-s8-p9.component';

describe('DiapoS8P9Component', () => {
  let component: DiapoS8P9Component;
  let fixture: ComponentFixture<DiapoS8P9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
