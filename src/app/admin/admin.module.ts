import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class AdminModule { }
