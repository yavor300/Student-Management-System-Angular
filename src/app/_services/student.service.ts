import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../_models/Student";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getStudentsNotInCourse(courseName: string) {
    return this.httpClient.post<Student[]>(this.baseUrl + '/student/available', {courseName});
  }

  public getStudentById(studentId: number) {
    return this.httpClient.get<Student>(this.baseUrl + '/student/get/' + studentId);
  }
}
