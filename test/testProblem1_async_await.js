const generateRandomFiles = require('../async_await/generateRandomFiles');
const removeFiles = require('../async_await/removeFiles');

generateRandomFiles()
   .then(() => {
      setTimeout(removeFiles, 3000);
   })
   .catch((error) => {
      console.log('Error: ', error);
   });
