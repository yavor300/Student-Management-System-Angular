import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AverageGradeComponent} from './average-grade/average-grade.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {GradePipe} from "./average-grade/grade.pipe";
import {StudentsFilterPipe} from "./student-filter.pipe";


@NgModule({
  declarations: [
    AverageGradeComponent,
    GradePipe,
    StudentsFilterPipe
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
