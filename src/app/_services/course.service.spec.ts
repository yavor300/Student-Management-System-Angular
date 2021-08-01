import {TestBed} from '@angular/core/testing';
import {environment} from 'src/environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import {CourseService} from './course.service';
import {Course} from "../_models/Course";

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;
  const baseUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CourseService
      ],
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('enrollStudentToCourse', () => {
    it('should enroll student to course', () => {
      const studentId = 1;
      const courseName = 'Java';

      service
        .enrollStudentToCourse(courseName, studentId)
        .subscribe((response: any) => {
          expect(response.studentId).toEqual(1);
        });

      const request = httpMock.expectOne(baseUrl + '/student/add/course');

      expect(request.request.method).toEqual('POST');

      request.flush({studentId: 1, courseName: 'Java'}, {
        status: 200,
        statusText: 'OK',
      });
      httpMock.verify();
    });

    it('should handle 404 if the students does not exist', () => {
      const studentId = -1;
      const courseName = 'Java';

      service
        .enrollStudentToCourse(courseName, studentId)
        .subscribe((response: any) => {
          expect(response.error).toEqual('Student not found!');
        });

      const request = httpMock.expectOne(baseUrl + '/student/add/course');

      expect(request.request.method).toEqual('POST');

      request.flush({error: 'Student not found!'}, {
        status: 404,
        statusText: 'Not Found',
      });
      httpMock.verify();
    });

    it('should handle 404 if the course does not exist', () => {
      const studentId = 1;
      const courseName = 'Not Existing';

      service
        .enrollStudentToCourse(courseName, studentId)
        .subscribe((response: any) => {
          expect(response.error).toEqual('Course not found!');
        });

      const request = httpMock.expectOne(baseUrl + '/student/add/course');

      expect(request.request.method).toEqual('POST');

      request.flush({error: 'Course not found!'}, {
        status: 404,
        statusText: 'Not Found',
      });
      httpMock.verify();
    });

    it('should handle 422 if the student is already enrolled in the course', () => {
      const studentId = 1;
      const courseName = 'Java';

      service
        .enrollStudentToCourse(courseName, studentId)
        .subscribe((response: any) => {
          expect(response.error).toEqual('Student is already enrolled to that course!');
        });

      const request = httpMock.expectOne(baseUrl + '/student/add/course');

      expect(request.request.method).toEqual('POST');

      request.flush({error: 'Student is already enrolled to that course!'}, {
        status: 422,
        statusText: 'Unprocessable Entity',
      });
      httpMock.verify();
    });
  });

  describe('getAllForLoggedInTeacher', () => {
    it('should return all courses', () => {
      const courses: Course[] = [
        {
          id: 1,
          name: 'Java',
          totalHours: 20,
          teacherName: 'Teacher',
          studentGrades: {},
          students: [],
          averageGrade: 4.35
        }
      ]

      service
        .getAllForLoggedInTeacher()
        .subscribe((response: Course[]) => {
          expect(response[0].id).toEqual(1);
        });

      const request = httpMock.expectOne(baseUrl + '/teacher/courses/all');

      expect(request.request.method).toEqual('GET');

      request.flush(courses, {
        status: 200,
        statusText: 'OK',
      });
      httpMock.verify();
    });
  });

  describe('getAllSorted', () => {
    it('should return all courses sorted', () => {
      const courses: Course[] = [
        {
          id: 1,
          name: 'Java',
          totalHours: 20,
          teacherName: 'Teacher',
          studentGrades: {},
          students: [],
          averageGrade: 4.35
        }
      ]

      service
        .getAllSorted()
        .subscribe((response: Course[]) => {
          expect(response[0].id).toEqual(1);
        });

      const request = httpMock.expectOne(baseUrl + '/course/all/ordered');

      expect(request.request.method).toEqual('GET');

      request.flush(courses, {
        status: 200,
        statusText: 'OK',
      });
      httpMock.verify();
    });
  });

  describe('getAll', () => {
    it('should return all courses', () => {
      const courses: Course[] = [
        {
          id: 1,
          name: 'Java',
          totalHours: 20,
          teacherName: 'Teacher',
          studentGrades: {},
          students: [],
          averageGrade: 4.35
        }
      ]

      service
        .getAll()
        .subscribe((response: Course[]) => {
          expect(response[0].id).toEqual(1);
        });

      const request = httpMock.expectOne(baseUrl + '/course/all');

      expect(request.request.method).toEqual('GET');

      request.flush(courses, {
        status: 200,
        statusText: 'OK',
      });
      httpMock.verify();
    });
  });

  describe('getById', () => {
    it('should return correct course', () => {
      const course: Course = {
        id: 1,
        name: 'Java',
        totalHours: 20,
        teacherName: 'Teacher',
        studentGrades: {},
        students: [],
        averageGrade: 4.35
      };

      service
        .getById('1')
        .subscribe((response: Course) => {
          expect(response.id).toEqual(1);
        });

      const request = httpMock.expectOne(baseUrl + '/course/average/1');

      expect(request.request.method).toEqual('GET');

      request.flush(course, {
        status: 200,
        statusText: 'OK',
      });
      httpMock.verify();
    });

    it('should return 404 if the course does not exist', () => {
      service
        .getById('1')
        .subscribe((response: any) => {
          expect(response.error).toEqual('Course not found!');
        });

      const request = httpMock.expectOne(baseUrl + '/course/average/1');

      expect(request.request.method).toEqual('GET');

      request.flush({error: 'Course not found!'}, {
        status: 404,
        statusText: 'Not Found',
      });
      httpMock.verify();
    });
  });


});
