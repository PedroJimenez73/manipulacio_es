import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P3Component } from './diapo-s9-p3.component';

describe('DiapoS9P3Component', () => {
  let component: DiapoS9P3Component;
  let fixture: ComponentFixture<DiapoS9P3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
