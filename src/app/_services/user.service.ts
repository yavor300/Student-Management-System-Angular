import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserLogin} from "../_models/UserLogin";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;
  private TOKEN_KEY: string = 'authToken';

  constructor(private httpClient: HttpClient) { }

  // TODO Identify whether the methods must be public or private

  public login(userLoginModel: UserLogin): Observable<void> {
    return this.httpClient.post(this.baseUrl + '/public/login', userLoginModel).pipe(
      map((response: any) => {
        this.saveToken(response.jwt);
      }, (error: HttpErrorResponse) => {
        alert(error.error.errors.join('\n'));
      })
    )
  }

  private getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public getUsername(): string {
    const token = this.getToken() || '';
    return JSON.parse(atob(token.split('')[1])).sub;
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
}
