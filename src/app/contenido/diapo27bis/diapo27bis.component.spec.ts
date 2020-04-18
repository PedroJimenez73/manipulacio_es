import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo27bisComponent } from './diapo27bis.component';

describe('Diapo27bisComponent', () => {
  let component: Diapo27bisComponent;
  let fixture: ComponentFixture<Diapo27bisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo27bisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo27bisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
