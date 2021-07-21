import { Component, OnInit } from '@angular/core';
import {GradeService} from "../../_services/grade.service";

@Component({
  selector: 'app-average-grade',
  templateUrl: './average-grade.component.html',
  styleUrls: ['./average-grade.component.css']
})
export class AverageGradeComponent implements OnInit {
  public averageGrade: number = 0;
  public errors: string = '';

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.showAverageGrade();
  }

  private showAverageGrade() {
    this.gradeService.getAverageGradeForStudent().subscribe(grade => {
      this.averageGrade = grade;
      this.errors = '';
    }, error => {
      this.errors = error.errors.errors.join('\n');
      this.averageGrade = 0;
    });
  }

}
