//  Modules

const names = require(`./modules-names`)
const sayHi = require(`./modules-utils`)

// console.log(names);

sayHi(`Susan`)
sayHi(names.john)
sayHi(names.peter)

// CommonJS, every file in node is a module (by default)
// Modules - Encapsuled Code (only share minimum)