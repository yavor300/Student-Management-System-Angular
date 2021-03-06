import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./dashboard/home/home.component";
import {AnonymousGuard} from "./guards/anonymous.guard";
import {RegisterComponent} from "./auth/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RoleGuard} from "./guards/role.guard";
import {CourseComponent} from "./course/course/course.component";
import {AdminComponent} from "./admin/admin/admin.component";
import {StudentProfileComponent} from "./student/student-profile/student-profile.component";
import {ProfileComponent} from "./dashboard/profile/profile.component";
import {NotFoundComponent} from "./dashboard/not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AnonymousGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AnonymousGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [AnonymousGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [RoleGuard], data: {role: 'ROLE_STUDENT'} },
  { path: 'courses/:id', component: CourseComponent, canActivate: [RoleGuard], data: {role: 'ROLE_STUDENT'} },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: {role: 'ROLE_ADMIN'} },
  { path: 'profile/student/:id', component: StudentProfileComponent, canActivate: [RoleGuard], data: {role: 'ROLE_STUDENT'} },
  { path: 'profile', component: ProfileComponent, canActivate: [RoleGuard], data: {role: 'ROLE_STUDENT'} },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
