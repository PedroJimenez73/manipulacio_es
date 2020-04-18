import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P5Component } from './diapo-s9-p5.component';

describe('DiapoS9P5Component', () => {
  let component: DiapoS9P5Component;
  let fixture: ComponentFixture<DiapoS9P5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
