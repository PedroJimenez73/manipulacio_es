import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P8Component } from './diapo-s9-p8.component';

describe('DiapoS9P8Component', () => {
  let component: DiapoS9P8Component;
  let fixture: ComponentFixture<DiapoS9P8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
