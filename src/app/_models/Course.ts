export interface Course {
  id: number,
  name: string,
  totalHours: number,
  teacherName?: string;
  studentGrades: {
    [name: string]: number
  },
  students: {studentName: string,gradeValue: number}[],
  averageGrade: number
}
