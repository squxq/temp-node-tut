const {readFile, writeFile} = require(`fs`)

console.log(`start`);
readFile(`./content/first.txt`, `utf-8`, (err, result) => {
    if (err) {
        console.log(err);
        return null
    }
    // console.log(result); // we get a buffer if we dont provide the utf code
    // return result 

    const first = result
    readFile(`./content/second.txt`, `utf-8`, (err, result) => {
        if (err) {
            console.log(err);
            return null
        }

        const second = result
        writeFile(`./content/result-async.txt`, 
        `Here is the result: ${first}; ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return null
            }
            // console.log(result); - gets us an undefined
            console.log(`done with this task`);
        })
    })
})
console.log(`starting next task`);

// we will see that we start the next task before we finish the first one