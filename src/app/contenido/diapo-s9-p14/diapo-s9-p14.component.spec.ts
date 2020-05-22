import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P14Component } from './diapo-s9-p14.component';

describe('DiapoS9P14Component', () => {
  let component: DiapoS9P14Component;
  let fixture: ComponentFixture<DiapoS9P14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
