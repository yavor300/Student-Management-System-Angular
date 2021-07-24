import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentsFilter'
})
export class StudentsFilterPipe implements PipeTransform {

  transform(args: {studentName: string, gradeValue: number}[], value: string): any[] {
    return args
      .filter(item => item.studentName.toLowerCase().startsWith(value.toLowerCase()));
  }
}
