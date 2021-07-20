import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  role: string = 'student';
  validationErrors: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.generateRegistrationForm();
  }

  private generateRegistrationForm(): FormGroup {
    let usernameFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    let uniqueCitizenNumber = this.formBuilder.control(null, [
      Validators.required,
      Validators.minLength(10)
    ]);

    let passwordFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    let nameFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    let ageFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    let degreeFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    if(this.role === 'student') {
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

  }
}
