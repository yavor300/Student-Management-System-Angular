import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../models/Role";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(this.baseUrl + '/role/all');
  }
}
