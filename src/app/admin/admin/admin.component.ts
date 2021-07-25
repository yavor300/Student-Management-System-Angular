import { Component, OnInit } from '@angular/core';
import {User} from "../../_models/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../_services/user.service";
import {Role} from "../../_models/Role";
import {RoleService} from "../../_services/role.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public users: User[] = [];
  public roles: Role[] = [];
  public changeRoleForm!: FormGroup;
  public message: string = '';
  public validationErrors: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private roleService: RoleService) { }

  ngOnInit(): void {
    this.changeRoleForm = this.generateChangeRoleForm();
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

  public onSubmitButtonClicked(): void {
    if (this.changeRoleForm.valid) {

    }
  }

  public getRole(user: User): string {
    return this.userService.getRole(user);
  }
}
