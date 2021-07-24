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

  public getAllForLoggedInTeacher(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl + '/teacher/courses/all').pipe(
      map((response: Course[]) => {
        return response;
      })
    );
  }

  public getAllSorted(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl + '/course/all/ordered')
      .pipe(
        map((response: Course[]) => {
          return response;
        })
      );
  }

  public getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl + '/course/all');
  }

  public getByName(name: string): Observable<Course> {
    return this.httpClient.get<Course>(this.baseUrl + '/course/average/' + name);
  }

  public assignTeacherToCourse(courseName:string, teacherId: number) {
    return this.httpClient.post(this.baseUrl + '/course/add/teacher', {courseName, teacherId});
  }

  public removeTeacherFromCourse(courseName: string) {
    return this.httpClient.post(this.baseUrl + '/course/delete/teacher', {courseName});
  }

  public enrollStudentToCourse(courseName: string, studentId: number) {
    return this.httpClient.post(this.baseUrl + '/student/add/course', {studentId, courseName});
  }
}
