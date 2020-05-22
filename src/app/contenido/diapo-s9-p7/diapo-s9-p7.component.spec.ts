import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P7Component } from './diapo-s9-p7.component';

describe('DiapoS9P7Component', () => {
  let component: DiapoS9P7Component;
  let fixture: ComponentFixture<DiapoS9P7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
