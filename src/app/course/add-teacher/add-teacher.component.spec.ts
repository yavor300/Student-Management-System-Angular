import { of } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SharedModule } from "src/app/shared/shared.module";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { AddTeacherComponent } from "./add-teacher.component";
import { Teacher } from "src/app/models/Teacher";
import { TeacherService } from "src/app/services/teacher.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('AddTeacherComponent', () => {
  let addTeacherComponent: AddTeacherComponent;
  let fixture: ComponentFixture<AddTeacherComponent>;
  let teachers: Teacher[];

  beforeEach(() => {
    let course = {id: 1, name: 'Java', totalHours: 120, studentGrades: {}};
    let data: any = {
      course: course
    };

    const mockDialogRef = {
      close: () => { }
    };

    TestBed.configureTestingModule({
      declarations: [
        AddTeacherComponent
      ],
      imports: [
        SharedModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        AddTeacherComponent,
        FormBuilder,
        { provide: MAT_DIALOG_DATA, useValue: {data: data } },
        { provide: MatDialogRef, useValue: mockDialogRef }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherComponent);
    addTeacherComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('select teacher', () => {
    let teacherService = TestBed.inject(TeacherService);

    teachers = [{id: 1, name: 'Ivan', degree: 'BSC'}, {id: 2, name: 'Milen', degree: 'MSC'}];

    spyOn(teacherService, 'getAll').and.callFake(() => of(teachers));
    addTeacherComponent.ngOnInit();
    const addTeacherFormGroup = addTeacherComponent.addTeacherForm;
    const input = addTeacherFormGroup.controls.teacher;
    input.setValue(addTeacherComponent.teachers[0].id);

    expect(input.value).toEqual(teachers[0].id);
    expect(addTeacherFormGroup.valid).toBeTruthy();
  });

});
