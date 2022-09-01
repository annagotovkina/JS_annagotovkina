const fs = require('fs');
const FILE_PATH = 'C:/Users/Anna/Desktop/JS Atomation Courses/JS_annagotovkina/input/productLinks.txt';

module.exports = {
  readContectFromFile(path) {
    try {
      return fs.readFileSync(path, 'utf8');
    } catch (err) {
      console.error(err);
    }
  },

  getArrayOfProductLinkObjects(array) {
    let arrayOfObjects = [];
    for (const element of array) {
      arrayOfObjects.push({ productLink: element });
    }
    return arrayOfObjects;
  }
  }