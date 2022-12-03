// nodeJS - docs - version - the modules - their properties and methods 
const os = require(`os`)
// info abt current user 
const user = os.userInfo()
console.log(user);
// up time of the system - how much time the computer has been running in seconds
const uptime = Math.floor(os.uptime() / 3600)
console.log(`The system has been running for ${uptime} hours.`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);