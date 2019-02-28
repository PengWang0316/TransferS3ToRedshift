'use strict';

const MAX_RECORD_NUMBER = 500;
const DATABASE_TITLE_ARRAY = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
];

module.exports = function getRecords(contentArr) {
  const timestamp = new Date().toISOString();
  const records = [];
  let record = [];

  contentArr.forEach(content => {
    if (content.length !== 0) { // Skip the emplty line
      const tempArr = content.split(',');
      const tempRecord = { timestamp };
      // Assume each content does not have more than 7 columns
      tempArr.forEach((item, index) => {
        tempRecord[DATABASE_TITLE_ARRAY[index]] = item.trim();
      });
      record.push({ Data: Buffer.from(JSON.stringify(tempRecord)) });
      if (record.length === MAX_RECORD_NUMBER) {
        records.push(record);
        record = [];
      }
    }
  });

  if (record.length !== 0) records.push(record);

  return records;
};
