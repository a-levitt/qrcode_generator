import inquirer from 'inquirer';
import qr from 'qr-image';

let qr_svg = qr.image('I love QR!', { type: 'svg' });


// Input - {type: 'input'}
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });