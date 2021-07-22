import { Component, OnInit } from '@angular/core';
import {Course} from "../../_models/Course";
import {CourseService} from "../../_services/course.service";
import {UserService} from "../../_services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [];
  public searchValue: string = '';

  constructor(private courseService: CourseService, public userService: UserService) { }

  ngOnInit(): void {
    let courses$: Observable<Course[]>;
    if (this.userService.getRoles().includes('ROLE_TEACHER')) {
      courses$ = this.courseService.getAllSorted();
    } else {
      courses$ = this.courseService.getAll();
    }
    courses$.subscribe(courses => {
      this.courses = courses;
    })
  }

}
