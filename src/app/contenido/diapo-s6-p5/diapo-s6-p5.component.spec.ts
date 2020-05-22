import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS6P5Component } from './diapo-s6-p5.component';

describe('DiapoS6P5Component', () => {
  let component: DiapoS6P5Component;
  let fixture: ComponentFixture<DiapoS6P5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS6P5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS6P5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
