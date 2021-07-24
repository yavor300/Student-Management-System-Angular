import {Component, Inject, OnInit} from '@angular/core';
import {Course} from "../../_models/Course";
import {Teacher} from "../../_models/Teacher";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeacherService} from "../../_services/teacher.service";
import {CourseService} from "../../_services/course.service";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  public course!: Course;
  public teachers: Teacher[] = [];
  public addTeacherForm!: FormGroup;
  public validationErrors: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public formBuilder: FormBuilder,
              public teacherService: TeacherService,
              public courseService: CourseService,
              public dialogRef: MatDialogRef<AddTeacherComponent>) { }

  ngOnInit(): void {
    this.course = this.data.course;
    this.teacherService.getAll().subscribe(teachers => this.teachers = teachers);
    this.addTeacherForm = this.generateAddTeacherForm();
  }

  private generateAddTeacherForm(): FormGroup {
    const teacherFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    return this.formBuilder.group({
      teacher: teacherFormControl
    });
  }

  public onSubmitButtonClicked(): void {
    if (this.addTeacherForm.valid) {
        this.courseService.assignTeacherToCourse(this.course.name, this.addTeacherForm.controls['teacher'].value)
          .subscribe(response => {
            this.closeDialog();
          });
    } else {
      this.addTeacherForm.markAllAsTouched();
    }
  }

  private closeDialog() {
    this.dialogRef.close();
  }
}
