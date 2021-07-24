import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../_models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseUrl + '/teacher/all');
  }
}
