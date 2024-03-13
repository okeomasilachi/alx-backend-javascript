interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Okeomasilachi',
  lastName: 'Onyedibia',
  age: 25,
  location: 'Omoku',
};

const student2: Student = {
  firstName: 'Hopeful',
  lastName: 'James',
  age: 20,
  location: 'UAE',
};

const studentsList: Array<Student> = [student1, student2];

const body = document.body;

const table = document.createElement('table');
body.appendChild(table);

for (const student of studentsList) {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
}
