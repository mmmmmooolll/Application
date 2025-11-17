import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedeSSIComponent } from './servicede-ssi.component';

describe('ServicedeSSIComponent', () => {
  let component: ServicedeSSIComponent;
  let fixture: ComponentFixture<ServicedeSSIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicedeSSIComponent]
    });
    fixture = TestBed.createComponent(ServicedeSSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
