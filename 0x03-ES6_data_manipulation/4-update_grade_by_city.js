export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const gradeData = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeData ? gradeData.grade : 'N/A';
    return {
      ...student,
      grade: student.location === city ? grade : 'N/A',
    };
  }).filter((student) => student.location === city);
}
