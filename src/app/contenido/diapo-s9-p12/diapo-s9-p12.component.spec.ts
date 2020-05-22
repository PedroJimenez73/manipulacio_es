import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P12Component } from './diapo-s9-p12.component';

describe('DiapoS9P12Component', () => {
  let component: DiapoS9P12Component;
  let fixture: ComponentFixture<DiapoS9P12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
