import {Component, Inject, OnInit} from '@angular/core';
import {Course} from "../../_models/Course";
import {Student} from "../../_models/Student";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CourseService} from "../../_services/course.service";

class StudentService {
}

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  public course!: Course;
  public students: Student[] = [];
  public addStudentForm!: FormGroup;
  public validationsErrors: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public formBuilder: FormBuilder,
              public studentService: StudentService,
              public courseService: CourseService,
              public dialogRef: MatDialogRef<AddStudentComponent>) { }

  ngOnInit(): void {
  }

}
