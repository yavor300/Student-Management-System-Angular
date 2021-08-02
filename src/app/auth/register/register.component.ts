import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from 'src/app/services/user.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  role: string = 'student';
  validationErrors: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.registerForm = this.generateRegistrationForm();
  }

  private generateRegistrationForm(): FormGroup {
    let usernameFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    let uniqueCitizenNumber = this.formBuilder.control(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]);

    let passwordFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    let nameFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    let ageFormControl = this.formBuilder.control(null, [
      Validators.required,
      Validators.min(16)
    ]);

    let degreeFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    if (this.role === 'student') {
      return this.formBuilder.group({
        username: usernameFormControl,
        uniqueCitizenNumber: uniqueCitizenNumber,
        password: passwordFormControl,
        name: nameFormControl,
        age: ageFormControl
      });
    }

    return this.formBuilder.group({
      username: usernameFormControl,
      uniqueCitizenNumber: uniqueCitizenNumber,
      password: passwordFormControl,
      name: nameFormControl,
      degree: degreeFormControl
    });
  }

  updateForm() {
    this.registerForm = this.generateRegistrationForm();
  }

  onSubmitButtonClicked() {
    if (this.registerForm.valid) {
      let registration$: Observable<any>;
      if (this.role === 'student') {
        registration$ = this.userService.registerStudent(this.registerForm.value);
      } else {
        registration$ = this.userService.registerTeacher(this.registerForm.value);
      }

      registration$.subscribe(
        () => {
          this.router.navigateByUrl('/login');
        }, error => {
          this.validationErrors = error.error.errors.join('\n');
        }
      )

    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
