import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P9Component } from './diapo-s9-p9.component';

describe('DiapoS9P9Component', () => {
  let component: DiapoS9P9Component;
  let fixture: ComponentFixture<DiapoS9P9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
