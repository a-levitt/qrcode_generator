import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
    message: "Type in a URL: ", 
    name: "URL"
  }])
  .then((answers) => {
    const url = answers.URL;
    let qr_img = qr.image( url, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('QRcodes/yourQR.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
