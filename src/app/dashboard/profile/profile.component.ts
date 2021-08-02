import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user!: User;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggedInUser(this.userService.getUsername()).subscribe(user => {
      this.user = user
    });
  }
}
