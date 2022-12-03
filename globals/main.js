//  Globals - no window

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about the environment where the program is being executed

console.log(__dirname);
console.log(__filename);
// console.log(process);

setInterval(() => {
    console.log(`Hello World!`);
}, 250)

// set interval and set timeout are available