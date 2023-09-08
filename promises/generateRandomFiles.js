const fs = require('fs');

// Create a directory of 3 random JSON files programatically using promises

function generateRandomFiles() {
   const promisesData = [];

   return new Promise((resolve, reject) => {
      fs.mkdir('../problem1_promises_directory', function () {
         for (let index = 1; index <= 3; index++) {
            const data = JSON.stringify(
               `This is Promise random-${index} Json File.`,
            );
            const filePath = `../problem1_promises_directory/random-${index}.json`;

            //we will create promises for each creation of file and add in promisesData-------

            const randomFilePromise = new Promise(
               (resolveRandomFile, rejectRandomFile) => {
                  fs.writeFile(filePath, data, (error) => {
                     if (error) {
                        rejectRandomFile(error);
                     } else {
                        console.log(`random-${index}.json has  Created.`);
                        resolveRandomFile();
                     }
                  });
               },
            );

            promisesData.push(randomFilePromise);
         }

         //then we will check if all promises are fullfilled or not using Promise.all() -----------

         Promise.all(promisesData)
            .then(() => {
               resolve('Random files has created ....'); //all randomFilePromise has fullfilled
            })
            .catch((error) => {
               reject(error);
            });
      });
   });
}

module.exports = generateRandomFiles;
