const fs = require('fs').promises; //we will use fs modules with promises

// Create a directory of 3 random JSON files programatically using async await ----

async function generateRandomFiles() {
   try {
      //creating the file directory ------

      await fs.mkdir('../output/problem1_async_await_directory', {
         recursive: true,
      });

      //creating random files three times
      for (let index = 1; index <= 3; index++) {
         let filePath = `../problem1_async_await_directory/random-${index}.json`;
         let data = JSON.stringify(
            `This is Async-await random-${index} Json File`,
         );

         //creating random files with data using writeFile -----
         await fs.writeFile(filePath, data);

         console.log(`random-${index}.json has been created!`);
      }
   } catch (error) {
      console.log('Error: ', error);
   }
}

module.exports = generateRandomFiles;
