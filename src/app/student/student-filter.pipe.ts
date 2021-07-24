import { Pipe, PipeTransform } from '@angular/core';
import {StudentWithAverageGrade} from "../_models/StudentWithAverageGrade";

@Pipe({
  name: 'studentsFilter'
})
export class StudentsFilterPipe implements PipeTransform {

  transform(args: StudentWithAverageGrade[], value: string): any[] {
    return args
      .filter(item => item.studentName.toLowerCase().startsWith(value.toLowerCase()));
  }
}
