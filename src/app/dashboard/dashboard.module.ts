import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { DashboardComponent } from './dashboard.component';
import {TeacherModule} from "../teacher/teacher.module";
import {StudentModule} from "../student/student.module";
import {CourseModule} from "../course/course.module";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    ProfileComponent
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    DashboardComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        TeacherModule,
        StudentModule,
        CourseModule
    ],
})

export class DashboardModule {
}
