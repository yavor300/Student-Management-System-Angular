import {Course} from "./Course";

export interface Student {
  id: number;
  name: string;
  age: number;
  username: string
  coursesEnrolled: Course[]
}
