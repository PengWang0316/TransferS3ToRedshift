'use strict';

/**
 * Parse the content from the file to an JSON format array.
 * The first row will be remove because it is the title.
 * @param {String} content comes from the file that was uploaded to S3.
 * @return {Array} return a content array. ['a: x, b: y', ...]
 */
module.exports = function parseContent(content) {
  const contentArr = content.toString('utf-8').replace(/\r/g, '').split(/\n/g);
  // Remove the first row
  contentArr.splice(0, 1);
  return contentArr;
};
