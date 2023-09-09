const fs = require('fs').promises;

async function appendDataIntoFile(data, filePath) {
   try {
      await fs.appendFile(filePath, data);
   } catch (error) {
      console.log('Error : ', error);
   }
}

module.exports = appendDataIntoFile;
