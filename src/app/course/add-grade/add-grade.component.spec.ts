import {of} from "rxjs";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {StudentService} from "src/app/services/student.service";
import {SharedModule} from "src/app/shared/shared.module";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {Student} from "src/app/models/Student";
import {AddGradeComponent} from "./add-grade.component";
import {GradeService} from "src/app/services/grade.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AddGradeComponent', () => {
  let addGradeComponent: AddGradeComponent;
  let fixture: ComponentFixture<AddGradeComponent>;
  let student: Student;
  let course = {id: 1, name: 'Java', totalHours: 120, studentGrades: {}};

  beforeEach(() => {
    let studentName = 'Ivan';
    let data: any = {
      course: course,
      studentName: studentName
    };

    const mockDialogRef = {
      close: () => {
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        AddGradeComponent
      ],
      imports: [
        SharedModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        AddGradeComponent,
        FormBuilder,
        {provide: MAT_DIALOG_DATA, useValue: {data: data}},
        {provide: MatDialogRef, useValue: mockDialogRef}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGradeComponent);
    addGradeComponent = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('input grade', () => {
    student = {id: 1, name: 'Ivan', username: 'Ivan', coursesEnrolled: [], age: 23};
    const studentService = TestBed.inject(StudentService);
    spyOn(studentService, 'getStudentById').and.callFake(() => {
      return of(student);
    })
    addGradeComponent.ngOnInit();
    let grade = 4.25;
    const addGradeFormGroup = addGradeComponent.addGradeForm;
    const input = addGradeFormGroup.controls.grade;
    input.setValue(grade);

    const gradeService = TestBed.inject(GradeService);
    spyOn(gradeService, 'addGrade').and.callFake(() => {
      return of({gradeValue: grade, student: student, course: course})
    })

    expect(input.value).toEqual(grade);
    expect(addGradeFormGroup.valid).toBeTruthy();
  });
});
