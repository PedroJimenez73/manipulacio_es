import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapoResEvalComponent } from './diapo-res-eval.component';

describe('DiapoResEvalComponent', () => {
  let component: DiapoResEvalComponent;
  let fixture: ComponentFixture<DiapoResEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapoResEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapoResEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
