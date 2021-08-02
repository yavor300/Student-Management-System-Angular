import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Course} from "../../models/Course";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-teachers-courses',
  templateUrl: './teachers-courses.component.html',
  styleUrls: ['./teachers-courses.component.css']
})
export class TeachersCoursesComponent implements OnInit {
  courses: Course[] = [];
  searchValue: string = '';

  constructor(public userService: UserService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllForLoggedInTeacher().subscribe(courses => this.courses = courses);
  }
}
