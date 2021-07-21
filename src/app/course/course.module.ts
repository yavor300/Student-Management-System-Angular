import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./filter.pipe";



@NgModule({
  declarations: [
    FilterComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    FilterComponent,
    FilterPipe
  ]
})
export class CourseModule { }
