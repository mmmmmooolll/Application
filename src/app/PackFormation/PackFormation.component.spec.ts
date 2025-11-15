import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackFormationComponent } from './PackFormation.component';

describe('PackFormationComponent', () => {
  let component: PackFormationComponent;
  let fixture: ComponentFixture<PackFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackFormationComponent]
    });
    fixture = TestBed.createComponent(PackFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
