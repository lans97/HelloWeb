const { readFile, readFileSync } = require ('fs');

const txt = readFileSync('./hello.txt', 'utf-8');

readFile('./hello.txt', 'utf-8', (err, txt) => {console.log(txt)} )

console.log('do this asap')