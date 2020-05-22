import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS7P5Component } from './diapo-s7-p5.component';

describe('DiapoS7P5Component', () => {
  let component: DiapoS7P5Component;
  let fixture: ComponentFixture<DiapoS7P5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS7P5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS7P5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
