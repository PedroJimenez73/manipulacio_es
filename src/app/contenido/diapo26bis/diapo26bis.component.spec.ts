import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo26bisComponent } from './diapo26bis.component';

describe('Diapo26bisComponent', () => {
  let component: Diapo26bisComponent;
  let fixture: ComponentFixture<Diapo26bisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo26bisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo26bisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
