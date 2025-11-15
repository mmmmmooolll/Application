import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserv2Component } from './reserv2.component';

describe('Reserv2Component', () => {
  let component: Reserv2Component;
  let fixture: ComponentFixture<Reserv2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Reserv2Component]
    });
    fixture = TestBed.createComponent(Reserv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
