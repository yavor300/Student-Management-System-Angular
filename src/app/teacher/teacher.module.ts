import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersCoursesComponent } from './teachers-courses/teachers-courses.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CourseModule} from "../course/course.module";



@NgModule({
    declarations: [
        TeachersCoursesComponent
    ],
    exports: [
        TeachersCoursesComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule,
      CourseModule
    ]
})
export class TeacherModule { }
