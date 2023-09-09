function sortTheDataFromFile(str) {
   let strArr = str.split(' ');

   strArr.sort();

   let sortedSentence = strArr.join(' ');

   return sortedSentence;
}

module.exports = sortTheDataFromFile;
