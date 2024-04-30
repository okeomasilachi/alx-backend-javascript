const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display initial prompt
console.log('Welcome to Holberton School, what is your name?');

// Read user input
rl.on('line', (input) => {
  if (input.trim() === '') {
    rl.close(); // Close the interface if input is empty
  } else {
    // Display user's name
    console.log(`Your name is: ${input}`);
    rl.close();
  }
});

// Handle program termination
if (!process.stdin.isTTY) {
  rl.on('close', () => {
    console.log('This important software is now closing');
    process.exit(0);
  });
}
