import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Student } from '../../_models/Student';
import { StudentService } from '../../_services/student.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  id: string = '';
  student!: Student;
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentById(this.route.snapshot.params['id'])
      .subscribe(student => this.student = student);
  }

}
