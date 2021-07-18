import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  validationErrors: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.generateLoginForm();
  }

  private generateLoginForm(): FormGroup {
    const usernameFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    const passwordFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    return this.formBuilder.group({
      username: usernameFormControl,
      password: passwordFormControl
    })
  }

  public onSubmitButtonClicked() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value)
        .subscribe(
          response => {
            this.router.navigateByUrl('/dashboard');
          }, error => {
            this.validationErrors = error.error.errors.join('\n');
          }
        )
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
