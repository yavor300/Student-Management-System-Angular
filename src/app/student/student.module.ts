import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AverageGradeComponent} from './average-grade/average-grade.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {GradePipe} from "./average-grade/grade.pipe";


@NgModule({
  declarations: [
    AverageGradeComponent,
    GradePipe
  ],
  exports: [
    AverageGradeComponent,
    GradePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class StudentModule {
}
