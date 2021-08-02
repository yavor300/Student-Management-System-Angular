import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UserLogin} from "../models/UserLogin";
import {TeacherRegister} from "../models/TeacherRegister";
import {StudentRegister} from "../models/StudentRegister";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;
  private TOKEN_KEY: string = 'authToken';

  constructor(private httpClient: HttpClient) { }

  public login(userLoginModel: UserLogin): Observable<void> {
    return this.httpClient.post(this.baseUrl + '/public/login', userLoginModel).pipe(
      map((response: any) => {
        this.saveToken(response.jwt);
      }, (error: HttpErrorResponse) => {
        alert(error.error.errors.join('\n'));
      })
    )
  }

  public getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public getUsername(): string {
    const token = this.getToken() || '';
    return JSON.parse(atob(token.split('.')[1])).sub;
  }

  public getRoles(): string {
    const token = this.getToken() || '';
    return JSON.parse(atob(token.split('.')[1])).roles;
  }

  private saveToken(jwt: string): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.setItem(this.TOKEN_KEY, jwt);
  }

  public logout(): void {
    sessionStorage.clear();
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  public registerTeacher(model: TeacherRegister): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/public/register/teacher', model);
  }

  public registerStudent(model: StudentRegister): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/public/register/student', model);
  }

  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + '/admin/all/users');
  }

  public getRole(user: User): string {
    if (user.authorities.length === 1) {
      return 'Student';
    } else if (user.authorities.length === 2) {
      return 'Teacher';
    } else {
      return 'Admin';
    }
  }

  public changeRole(username: string, role: string) {
    return this.httpClient.post(this.baseUrl + '/role/change', {username, role});
  }

  public getLoggedInUser(username:string): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/public/logged', {username});
  }
}
