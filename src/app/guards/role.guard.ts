import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    if(this.userService.isLoggedIn()) {
      const token = this.userService.getToken() || '';
      const userRoles = JSON.parse(atob(token.split('.')[1])).roles;

      if(userRoles.includes(route.data.role)) {
        return true;
      }

      this.router.navigate(['dashboard']);
      return false;
    }

    this.router.navigate(['home']);
    return false;
  }
}
