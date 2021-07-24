import {Component, OnInit} from '@angular/core';
import {Course} from "../../_models/Course";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../_services/course.service";
import {UserService} from "../../_services/user.service";
import {GradeService} from "../../_services/grade.service";
import {AddTeacherComponent} from "../add-teacher/add-teacher.component";
import {AddStudentComponent} from "../add-student/add-student.component";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public course!: Course;
  public searchValue: string = '';

  constructor(public matDialog: MatDialog, private route: ActivatedRoute, private courseService: CourseService, public userService: UserService, private gradeService: GradeService) {
  }

  ngOnInit(): void {
    this.loadCourse();
  }

  private loadCourse(): void {
    const courseName = this.route.snapshot.paramMap.get('name') || '';
    this.courseService.getByName(courseName)
      .subscribe(course => this.course = course);
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

  openAddGradeDialog(key: string | number | string | Date | ArrayBufferView | ArrayBuffer | IDBArrayKey | ((index: number) => (string | null))) {

  }
}
