import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcom2Component } from './welcom2.component';

describe('Welcom2Component', () => {
  let component: Welcom2Component;
  let fixture: ComponentFixture<Welcom2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Welcom2Component]
    });
    fixture = TestBed.createComponent(Welcom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
