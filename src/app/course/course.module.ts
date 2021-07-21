import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./filter.pipe";
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [
    FilterComponent,
    FilterPipe,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    FilterComponent,
    FilterPipe,
    CoursesComponent
  ]
})
export class CourseModule { }
