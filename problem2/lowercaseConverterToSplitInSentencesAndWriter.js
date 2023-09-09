const fs = require('fs').promises;
const writeDataIntoFile = require('../utility/writeDataIntoFile');

async function lowercaseConverterToSplitInSentencesAndWriter(data) {
   try {
      const lowercaseData = data.toLowerCase();

      const sentencesArr = lowercaseData.split('.');

      const fileNames = [];

      for (let index = 0; index < sentencesArr.length; index++) {
         const filePath = `../output/problem2_output/sentence-${index + 1}.txt`;
         await writeDataIntoFile(sentencesArr[index], filePath);
         fileNames.push(`sentence-${index + 1}`);
      }
      console.log(
         'data has converted into lowercase , splitted into sentences and file for each sentences has created !',
      );
      return fileNames;
   } catch (error) {
      console.log('Error: ', error);
   }
}

module.exports = lowercaseConverterToSplitInSentencesAndWriter;
