import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "../_models/Course";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getAllForLoggedInTeacher(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl + '/teacher/courses/all');
  }

  public getAllSorted(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl + '/course/all/ordered');
  }

  public getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl + '/course/all');
  }

  public getById(id: string): Observable<Course> {
    return this.httpClient.get<Course>(this.baseUrl + '/course/average/' + id);
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

  public addCourse(name: string, totalHours: number) {
    return this.httpClient.post(this.baseUrl + '/course/add', {name, totalHours});
  }
}
