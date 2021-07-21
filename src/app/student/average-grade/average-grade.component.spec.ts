import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageGradeComponent } from './average-grade.component';

describe('AverageGradeComponent', () => {
  let component: AverageGradeComponent;
  let fixture: ComponentFixture<AverageGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
