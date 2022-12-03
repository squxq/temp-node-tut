const path = require(`path`)

console.log(path.sep);

const filePath = path.join(`/content`,`subfolder`, `text.txt`)
console.log(filePath)

const base = path.basename(filePath) // gets us the name of the file
console.log(base);

const absolutePath = path.resolve(__dirname, `content`, `subfolder`, `text.txt`)
console.log(absolutePath);