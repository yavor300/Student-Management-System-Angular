import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersCoursesComponent } from './teachers-courses.component';

describe('TeachersCoursesComponent', () => {
  let component: TeachersCoursesComponent;
  let fixture: ComponentFixture<TeachersCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
