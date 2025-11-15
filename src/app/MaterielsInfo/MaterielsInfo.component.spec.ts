import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielsInfoComponent } from './MaterielsInfo.component';

describe('MaterielsInfoComponent', () => {
  let component: MaterielsInfoComponent;
  let fixture: ComponentFixture<MaterielsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterielsInfoComponent]
    });
    fixture = TestBed.createComponent(MaterielsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
