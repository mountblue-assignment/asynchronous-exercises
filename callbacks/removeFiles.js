const fs = require('fs');

// we will delete  3 random JSON files programatically using callback Asynchronously

function removeFiles() {
   for (let index = 1; index <= 3; index++) {
      const filePath = `../problem1_callbacks_directory/random-${index}.json`;

      fs.unlink(filePath, (error) => {
         if (error) {
            console.log('Error: ', error);
            return;
         }
         console.log(`random-${index}.json has been deleted`);
      });
   }
}

module.exports = removeFiles;
