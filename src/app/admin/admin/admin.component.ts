import {Component, OnInit} from '@angular/core';
import {User} from "../../_models/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../_services/user.service";
import {Role} from "../../_models/Role";
import {RoleService} from "../../_services/role.service";
import {CourseService} from "../../_services/course.service";
import ignore from "ignore";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public users: User[] = [];
  public roles: Role[] = [];
  public changeRoleForm!: FormGroup;
  public addCourseForm!: FormGroup;
  public message: string = '';
  public validationErrors: string = '';
  public validationErrorsAddCourse: string = '';
  public messageAddCourse: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private roleService: RoleService,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.changeRoleForm = this.generateChangeRoleForm();
    this.addCourseForm = this.generateAddCourseForm();
    this.userService.getAll().subscribe(users => this.users = users);
    this.roleService.getAll().subscribe(roles => this.roles = roles);
  }

  private generateChangeRoleForm(): FormGroup {
    const userFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    const roleFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    return this.formBuilder.group({
      user: userFormControl,
      role: roleFormControl
    });
  }

  private generateAddCourseForm(): FormGroup {
    const courseFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    const hoursFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    return this.formBuilder.group({
      course: courseFormControl,
      hours: hoursFormControl
    });
  }

  public onSubmitButtonClicked(): void {
    if (this.changeRoleForm.valid) {
      this.validationErrors = '';
      this.userService.changeRole(this.changeRoleForm.controls['user'].value,
        this.changeRoleForm.controls['role'].value)
        .subscribe(user => {
          if (user) {
            this.message = "Role successfully changed.";
            this.userService.getAll().subscribe(users => this.users = users);

            if (this.userService.getUsername() === this.changeRoleForm.controls['user'].value) {
              this.userService.logout();
              this.router.navigate(['/login']);
            }
          }
        }, error => {
          this.message = '';
          try {
            this.validationErrors = error.error.errors.join('\n')
          } catch (err) {
            this.validationErrors = 'You do not have permissions!';
          }
        });
    }
  }

  public getRole(user: User): string {
    return this.userService.getRole(user);
  }

  public addCourse(): void {
    if (this.addCourseForm.valid) {
      this.validationErrorsAddCourse = '';

      this.courseService.addCourse(this.addCourseForm.controls['course'].value,
        this.addCourseForm.controls['hours'].value)
        .subscribe(() => {
            this.messageAddCourse = "Course added successfully.";
        }, error => {
          try {
            this.validationErrorsAddCourse = error.error.errors.join('\n')
          } catch (err) {
            this.validationErrorsAddCourse = 'An error occured!';
          }
        });
    }
  }
}
