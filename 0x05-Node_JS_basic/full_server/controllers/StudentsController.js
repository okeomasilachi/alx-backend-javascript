import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[6]);
      let response = 'This is the list of our students\n';
      Object.keys(data).sort().forEach((field) => {
        response += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });
      return res.status(200).send(response.trim()); // Added return here
    } catch (error) {
      return res.status(500).send('Cannot load the database'); // Added return here
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      console.log(process.argv[6]);
      const data = await readDatabase(process.argv[6]);
      if (data[major]) {
        return res.status(200).send(`List: ${data[major].join(', ')}`); // Added return here
      }
      return res.status(500).send('Major not found'); // Added return here
    } catch (error) {
      return res.status(500).send('Cannot load the database'); // Added return here
    }
  }
}

export default StudentsController;
