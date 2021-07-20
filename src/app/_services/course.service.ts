import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "../_models/Course";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllForLoggedInTeacher(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl + '/teacher/courses/all').pipe(
      map((response: Course[]) => {
        return response;
      })
    );
  }
}
