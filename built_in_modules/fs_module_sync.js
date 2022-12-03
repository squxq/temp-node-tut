const {readFileSync, writeFileSync, write} = require(`fs`)

console.log(`start`);

const first = readFileSync(`./content/first.txt`, `utf-8`) // the second parameter is how node will be encoding the file 
console.log(first);
const second = readFileSync(`./content/second.txt`, `utf-8`) // the fisrt parameter is the file path
console.log(second);

writeFileSync(`./content/result-sync.txt`, 
`Here is the result: ${first}; ${second}.`,
{flag: `a`}) // for node to append we need to add the flag: `a`

console.log(`done with this task`);
console.log(`starting the next one`);