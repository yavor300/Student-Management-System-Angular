import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, canActivate: [AnonymousGuard] },
  { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [RoleGuard], data: {role: 'ROLE_DEV'} },
  // { path: 'courses/:id', component: CourseComponent, canActivate: [RoleGuard], data: {role: 'ROLE_STUDENT'} },
  // { path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: {role: 'ROLE_ADMIN'} },
  // { path: 'profile/student/:name', component: StudentProfileComponent, canActivate: [RoleGuard], data: {role: 'ROLE_DEV'} },
  // { path: 'profile', component: ProfileComponent, canActivate: [RoleGuard], data: {role: 'ROLE_DEV'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
