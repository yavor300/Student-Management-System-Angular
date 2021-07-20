import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DashboardComponent
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
})

export class DashboardModule {
}
