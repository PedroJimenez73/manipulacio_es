import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoS9P11Component } from './diapo-s9-p11.component';

describe('DiapoS9P11Component', () => {
  let component: DiapoS9P11Component;
  let fixture: ComponentFixture<DiapoS9P11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoS9P11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoS9P11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
