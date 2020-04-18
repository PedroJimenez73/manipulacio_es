import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS8P5Component } from './diapo-s8-p5.component';

describe('DiapoS8P5Component', () => {
  let component: DiapoS8P5Component;
  let fixture: ComponentFixture<DiapoS8P5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS8P5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS8P5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
