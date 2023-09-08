const fs = require('fs');

//we will delete 3 random JSON files programatically using promises

function removeFiles() {
   const deletedPromisesData = [];

   console.log('Deleting file has started ---->>> ');

   for (let index = 1; index <= 3; index++) {
      const filePath = `../problem1_promises_directory/random-${index}.json`;

      // we will create promise for each deletion of random file and add result in deletedPromiseData ------

      const randomDeleteFilePromise = new Promise(
         (resolveDeleteRandomFile, rejectDeleteRandomFile) => {
            //for  deleting  file Asynchronously we use unlink ---------
            fs.unlink(filePath, (error) => {
               if (error) {
                  rejectDeleteRandomFile(error);
               } else {
                  console.log(`random-${index}.json has been deleted`);
                  resolveDeleteRandomFile();
               }
            });
         },
      );

      deletedPromisesData.push(randomDeleteFilePromise);
   }

   //then we will check if all promises are fullfilled (means all random files are deleted)  or not using Promise.all() -----------

   return Promise.all(deletedPromisesData);
}

module.exports = removeFiles;
