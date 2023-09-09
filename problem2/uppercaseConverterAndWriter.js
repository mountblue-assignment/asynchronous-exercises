const fs = require('fs').promises;
const writeDataIntoFile = require('../utility/writeDataIntoFile'); //import function for writing data into new file

// Convert the contents of the file lipsum.txt to uppercase & write the uppercase content to a new file called uppercase.txt.
// Store the name of the new file in filenames.txt

async function uppercaseConverterAndWriter(data, filePath) {
   try {
      const uppercaseData = data.toUpperCase(); //convert data into uppercase
      await writeDataIntoFile(uppercaseData, filePath); //write uppercase data into new file
      console.log(
         'data has converted into uppercase and uppercase.txt has created !',
      );
   } catch (error) {
      console.log('Error : ', error);
   }
}

module.exports = uppercaseConverterAndWriter;
