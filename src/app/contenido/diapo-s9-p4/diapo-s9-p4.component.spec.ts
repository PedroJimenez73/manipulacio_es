import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P4Component } from './diapo-s9-p4.component';

describe('DiapoS9P4Component', () => {
  let component: DiapoS9P4Component;
  let fixture: ComponentFixture<DiapoS9P4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
