const generateRandomFiles = require('../promises/generateRandomFiles');
const removeFiles = require('../promises/removeFiles');

// we will call generateRandomFiles and using promise chaining we will call removeFiles

generateRandomFiles()
   .then((message) => {
      console.log(message);
      return setTimeout(removeFiles, 3000);
   })
   .then(() => {
      console.log('Deleted SuccessFully !');
   })
   .catch((error) => {
      console.log('Error: ', error);
   });
