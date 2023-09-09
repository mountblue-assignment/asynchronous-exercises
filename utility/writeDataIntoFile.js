const fs = require('fs').promises;

//write data into new file -----------

async function writeDataIntoFile(data, filePath) {
   try {
      await fs.writeFile(filePath, data);
   } catch (error) {
      console.log('Error: ', error);
   }
}

module.exports = writeDataIntoFile;
