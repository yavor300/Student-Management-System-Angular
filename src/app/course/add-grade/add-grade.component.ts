import {Component, Inject, OnInit} from '@angular/core';
import {Course} from "../../models/Course";
import {Student} from "../../models/Student";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StudentService} from "../../services/student.service";
import {GradeService} from "../../services/grade.service";

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {
  public course!: Course;
  public student!: Student;
  public addGradeForm!: FormGroup;
  public validationErrors: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public formBuilder: FormBuilder,
              public studentService: StudentService,
              public gradeService: GradeService,
              public dialogRef: MatDialogRef<AddGradeComponent>) {
  }

  ngOnInit(): void {
    this.course = this.data.course;
    this.studentService.getStudentById(this.data.studentId)
      .subscribe(student => this.student = student);
    this.addGradeForm = this.generateAddGradeForm();
  }

  private generateAddGradeForm(): FormGroup {
    const gradeFormControl = this.formBuilder.control(null, [
      Validators.required,
      Validators.min(2),
      Validators.max(6)
    ]);

    return this.formBuilder.group({
      grade: gradeFormControl
    });
  }

  public onSubmitButtonClicked(): void {
    if (this.addGradeForm.valid) {
      this.gradeService.addGrade(this.addGradeForm.controls['grade'].value, this.student.id, this.course.name)
        .subscribe(() => this.closeDialog());
    } else {
      this.addGradeForm.markAllAsTouched();
    }
  }

  private closeDialog(): void {
    this.dialogRef.close();
  }
}
