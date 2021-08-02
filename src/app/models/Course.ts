import {StudentWithAverageGrade} from "./StudentWithAverageGrade";

export interface Course {
  id: number,
  name: string,
  totalHours: number,
  teacherName?: string;
  studentGrades: {
    [name: string]: number
  },
  students: StudentWithAverageGrade[],
  averageGrade: number
}
