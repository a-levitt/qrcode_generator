import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// let qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));
// let svg_string = qr.imageSync('I love QR!', { type: 'svg' });

// Input - {type: 'input'}
inquirer
  .prompt([{
    message: "Type in a URL: ", 
     name: "URL"
  }])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });