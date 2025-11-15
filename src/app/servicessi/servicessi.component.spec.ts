import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicessiComponent } from './servicessi.component';

describe('ServicessiComponent', () => {
  let component: ServicessiComponent;
  let fixture: ComponentFixture<ServicessiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicessiComponent]
    });
    fixture = TestBed.createComponent(ServicessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
