import { Teacher } from "./Teacher";

export interface Course {
  id: number,
  name: string,
  totalHours: number,
  teacher?: Teacher;
  studentGrades: {
    [name: string]: number
  },
  averageGrade?: number
}
