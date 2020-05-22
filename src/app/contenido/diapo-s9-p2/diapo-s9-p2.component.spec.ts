import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P2Component } from './diapo-s9-p2.component';

describe('DiapoS9P2Component', () => {
  let component: DiapoS9P2Component;
  let fixture: ComponentFixture<DiapoS9P2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
