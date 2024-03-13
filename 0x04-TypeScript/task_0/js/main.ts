interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ibim',
  lastName: 'Jumbo',
  age: 25,
  location: 'Japan',
};

const student2: Student = {
  firstName: 'Hopeful',
  lastName: 'James',
  age: 20,
  location: 'UAE',
};

const studentsList: Array<Student> = [student1, student2];

document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');

  studentsList.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
});
