import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P9Component } from './diapo-s7-p9.component';

describe('DiapoS7P9Component', () => {
  let component: DiapoS7P9Component;
  let fixture: ComponentFixture<DiapoS7P9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
