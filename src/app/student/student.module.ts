import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AverageGradeComponent} from './average-grade/average-grade.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {GradePipe} from "./average-grade/grade.pipe";
import {StudentsFilterPipe} from "./student-filter.pipe";
import { StudentProfileComponent } from './student-profile/student-profile.component';


@NgModule({
  declarations: [
    AverageGradeComponent,
    GradePipe,
    StudentsFilterPipe,
    StudentProfileComponent
  ],
  exports: [
    AverageGradeComponent,
    GradePipe,
    StudentsFilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class StudentModule {
}
