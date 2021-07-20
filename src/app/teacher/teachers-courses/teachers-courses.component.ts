import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";
import {Course} from "../../_models/Course";
import {CourseService} from "../../_services/course.service";

@Component({
  selector: 'app-teachers-courses',
  templateUrl: './teachers-courses.component.html',
  styleUrls: ['./teachers-courses.component.css']
})
export class TeachersCoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(public userService: UserService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllForLoggedInTeacher().subscribe(courses => this.courses = courses);
  }
}
