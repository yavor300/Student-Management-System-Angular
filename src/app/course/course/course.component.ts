import {Component, OnInit} from '@angular/core';
import {Course} from "../../_models/Course";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../_services/course.service";
import {UserService} from "../../_services/user.service";
import {GradeService} from "../../_services/grade.service";
import {AddTeacherComponent} from "../add-teacher/add-teacher.component";
import {AddStudentComponent} from "../add-student/add-student.component";
import {AddGradeComponent} from "../add-grade/add-grade.component";
import {StudentWithAverageGrade} from "../../_models/StudentWithAverageGrade";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public course!: Course;
  public searchValue: string = '';
  public students: StudentWithAverageGrade[] = [];

  constructor(public matDialog: MatDialog, private route: ActivatedRoute, private courseService: CourseService, public userService: UserService, private gradeService: GradeService) {
  }

  ngOnInit(): void {
    this.loadCourse();
  }

  private loadCourse(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.courseService.getById(id)
      .subscribe(course => {
        this.course = course;
        this.students = this.course.students.sort((f, s) => f.studentName.localeCompare(s.studentName));
      });
  }

  public openAddTeacherDialog(): void {
    const dialogRef = this.matDialog.open(AddTeacherComponent, {
      autoFocus: false,
      data: {
        course: this.course
      }
    });

    dialogRef.afterClosed()
      .subscribe(() => this.loadCourse());
  }

  public removeTeacher(): void {
    this.courseService.removeTeacherFromCourse(this.course.name)
      .subscribe(() => this.course.teacherName = undefined);
  }

  public openAddStudentDialog(): void {
    const dialogRef = this.matDialog.open(AddStudentComponent, {
      autoFocus: false,
      data: {
        course: this.course
      }
    });
    dialogRef.afterClosed().subscribe(
      () => this.loadCourse()
    )
  }

  public openAddGradeDialog(studentId: number) {
    const dialogRef = this.matDialog.open(AddGradeComponent, {
      autoFocus: false,
      data: {
        course: this.course,
        studentId: studentId
      }
    });

    dialogRef.afterClosed()
      .subscribe(() => this.loadCourse());
  }
}
