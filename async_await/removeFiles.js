const fs = require('fs').promises; //we will use fs modules with promises

//we will delete 3 random JSON files programatically using async await ----

async function removeFiles() {
   console.log('Deletion of file has started ---->>> ');

   for (let index = 1; index <= 3; index++) {
      const filePath = `../output/problem1_async_await_directory/random-${index}.json`;

      await fs.unlink(filePath);

      console.log(`random-${index}.json has been deleted`);
   }
}

module.exports = removeFiles;
