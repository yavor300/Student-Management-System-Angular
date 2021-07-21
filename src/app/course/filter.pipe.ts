import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../_models/Course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(args: Course[], value: string): Course[] {
    return args
      .filter(item => item.name.toLowerCase().startsWith(value.toLowerCase()));
  }
}
