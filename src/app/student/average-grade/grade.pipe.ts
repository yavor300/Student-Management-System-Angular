import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(grade: number): string {
    let result = 'avg. ';
    if(2.00 <= grade && grade < 3.00) {
      result += 'F';
    } else if(grade === 3.00) {
      result += 'D';
    } else if(3.00 <= grade && grade < 3.50) {
      result += 'D+';
    } else if(3.50 <= grade && grade < 4.00) {
      result += 'C-';
    } else if(grade === 4.00) {
      result += 'C';
    } else if(4.00 < grade && grade < 4.50) {
      result += 'C+';
    } else if(4.50 <= grade && grade < 5.00) {
      result += 'B-';
    } else if(grade === 5.00) {
      result += 'B';
    } else if(5.00 < grade && grade < 5.50) {
      result += 'B+';
    } else if(5.50 <= grade && grade < 5.75) {
      result += 'A-';
    } else if(5.75 <= grade && grade < 6.00) {
      result += 'A';
    } else if(grade < 2.0) {
      result += 'None';
    } else {
      result += 'A+'
    }
    return result;
  }

}
