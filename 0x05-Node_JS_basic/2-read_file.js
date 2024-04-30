const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    const fields = {};
    let count = 0;
    for (const i of data.slice(1)) {
      if (i !== '') {
        count += 1;
        const student = i.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = { count: 0, students: [] };
        }
        fields[student[3]].count += 1;
        fields[student[3]].students.push(student[0]);
      }
    }
    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (field) {
        console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].students.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
