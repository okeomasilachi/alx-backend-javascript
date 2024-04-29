/*
Create a program named 1-stdin.js that will be executed through
command line:

It should display the message Welcome to Holberton School, what is
your name? (followed by a new line)
The user should be able to input their name on a new line
The program should display Your name is: INPUT
When the user ends the program, it should display This important
software is now closing (followed by a new line)
*/

const readline = require('readline');

const cmd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

cmd.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}!`);
  cmd.on('close', () => {
    console.log('This important software is now closing\n');
  });
  cmd.close();
});
