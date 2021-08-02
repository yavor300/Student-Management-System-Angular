import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getAverageGradeForStudent(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/student/average').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public addGrade(value:number, studentId: number, courseName: string) {
    return this.httpClient.post(this.baseUrl + '/grade/add', {value, studentId, courseName});
  }
}
