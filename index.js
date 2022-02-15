const fs = require('fs');
const fsPromise = fs.promises;

fsPromise.readFile('./text-file/text.txt', 'utf8').then((data)=> {
    fsPromise.writeFile('./text-file/text2.txt', data, 'utf8');
})


