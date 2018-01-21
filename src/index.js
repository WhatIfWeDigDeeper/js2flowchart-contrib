const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, '../test');
const docDir = path.join(__dirname, '../docs');
const files = fs.readdirSync(dirname);


const dirExists = (path) => {
  try  {
    return fs.statSync(path).isDirectory;
  }
  catch (e) {
    return false;
  }
};

if (!dirExists(docDir)) {
  console.log(`creating directory ${docDir}`);
  fs.mkdirSync(docDir);
}

files.forEach(file => {
  const filePath = path.join(dirname, file);
  console.log(`filePath ${filePath}`);
});
