const fs = require('fs').promises;

async function deleteFiles(filePath) {
   try {
      await fs.unlink(filePath);
   } catch (error) {
      console.log('Error: ', error);
   }
}

module.exports = deleteFiles;
