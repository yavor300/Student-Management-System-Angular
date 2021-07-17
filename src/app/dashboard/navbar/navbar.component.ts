import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
