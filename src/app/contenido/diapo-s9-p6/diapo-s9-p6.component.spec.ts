import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P6Component } from './diapo-s9-p6.component';

describe('DiapoS9P6Component', () => {
  let component: DiapoS9P6Component;
  let fixture: ComponentFixture<DiapoS9P6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
