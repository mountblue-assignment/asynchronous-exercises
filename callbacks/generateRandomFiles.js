const fs = require('fs');

// Create a directory of 3 random JSON files programatically using callback

function generateRandomFiles(callBack) {
   fs.mkdir('../output/problem1_callbacks_directory', function () {
      //we will use fileCreatedTimes to keep track of files after creating 3 files we will call callBack function

      let fileCreatedTimes = 0;

      for (let index = 1; index <= 3; index++) {
         const data = JSON.stringify(
            `This is Callback random-${index} Json File.`,
         );
         const filePath = `../problem1_callbacks_directory/random-${index}.json`;

         fs.writeFile(filePath, data, (error) => {
            if (error) {
               console.log('Error : ', error);
               return;
            }
            console.log(`random-${index}.json has been Created.`);

            fileCreatedTimes++;

            //for deleting  the random files we will call callback (removeFiles)function

            if (fileCreatedTimes >= 3) {
               setTimeout(() => {
                  console.log('Deletion of file has started ---->>> ');
                  callBack();
               }, 3000);
            }
         });
      }
   });
}

module.exports = generateRandomFiles;
