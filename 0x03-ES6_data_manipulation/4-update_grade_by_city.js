export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    if (grade) {
      return { ...student, grade: grade.grade };
    }
    return { ...student, grade: 'N/A' };
  }).filter((student) => student.location === city);
}
