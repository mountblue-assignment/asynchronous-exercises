const generateRandomFiles = require('../callbacks/generateRandomFiles');
const removeFiles = require('../callbacks/removeFiles');

//   we will call generateRandomFiles and passing removeFiles as callback

generateRandomFiles(removeFiles);
