import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-average-grade',
  templateUrl: './average-grade.component.html',
  styleUrls: ['./average-grade.component.css']
})
export class AverageGradeComponent implements OnInit {
  private averageGrade: number = 0;
  public errors: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
