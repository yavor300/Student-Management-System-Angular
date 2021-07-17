import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../_services/user.service";

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
  }

}
