const readDataFromSource = require('../utility/readDataFromSource');
const writeDataIntoFile = require('../utility/writeDataIntoFile');
const uppercaseConverterAndWriter = require('../problem2/uppercaseConverterAndWriter');
const lowercaseConverterToSplitInSentencesAndWriter = require('../problem2/lowercaseConverterToSplitInSentencesAndWriter');
const appendDataIntoFile = require('../utility/appendDataIntoFiles');
const sortTheDataFromFile = require('../utility/sortTheDataFromFile');
const deleteFiles = require('../utility/deleteFiles');

// problems:------

//1-  Read the given file lipsum.txt

async function main() {
   try {
      //#1-------------->
      const data = await readDataFromSource('../data/lipsum.txt');

      //#2--------------->
      //convert data into uppercase and write into uppercase.txt ------
      await uppercaseConverterAndWriter(
         data,
         '../output/problem2_output/uppercase.txt',
      );

      //   Store the name of the new file (uppercase.txt) in filenames.txt
      await writeDataIntoFile(
         'uppercase.txt  \n',
         '../output/problem2_output/filenames.txt',
      );

      //#3------------>
      //read the data from new file (uppercase.txt) then convert data from uppercase.txt to lowercase
      // and split the data into sentences and write into new files (e.g. sentence-1.txt)

      const uppercaseData = await readDataFromSource(
         '../output/problem2_output/uppercase.txt',
      );
      const fileNames =
         await lowercaseConverterToSplitInSentencesAndWriter(uppercaseData);

      //store the name of the new files in filenames.txt --------

      fileNames.forEach(async (file) => {
         await appendDataIntoFile(
            `${file}.txt \n`,
            '../output/problem2_output/filenames.txt',
         );
      });

      //#4------------>
      //read the new files and sort the content of each new files  and write into sorted.txt

      fileNames.forEach(async (file, index) => {
         const filePath = `../output/problem2_output/sentence-${index + 1}.txt`;
         const fileData = await readDataFromSource(filePath);
         const sortedFileData = sortTheDataFromFile(fileData);

         await appendDataIntoFile(
            `${sortedFileData} \n`,
            '../output/problem2_output/sorted.txt',
         );
      });

      //   Store the name of the new file (sorted.txt) in filenames.txt

      await appendDataIntoFile(
         'sorted.txt \n',
         '../output/problem2_output/filenames.txt',
      );

      //#5------------>
      //   Read the contents of filenames.txt-----

      const filenamesData = await readDataFromSource(
         '../output/problem2_output/filenames.txt',
      );

      //   delete all the new files that are  present in filename.txt ------

      const filenamesArr = filenamesData.split('\n');

      filenamesArr.forEach(async (file) => {
         console.log('Deletion of file has started ---->>> ');

         //we will check whether file name exist or not -----

         if (file.trim()) {
            const filePath = `../output/problem2_output/${file.trim()}`;
            await setTimeout(() => {
               deleteFiles(filePath);
            }, 2000);
            console.log(`${file} has deleted !`);
         }
      });
   } catch (error) {
      console.log('Error: ', error.message);
   }
}

main();
