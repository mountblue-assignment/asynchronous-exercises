const fs = require('fs').promises;

async function readDataFromSource(filePath) {
   try {
      const data = await fs.readFile(filePath, 'utf-8');
      return data;
   } catch (error) {
      console.log('Error : ', error);
   }
}

module.exports = readDataFromSource;
