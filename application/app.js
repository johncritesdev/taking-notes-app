const validator = require('validator');
const notes = require('./notes');

const msg = notes();

console.log(msg);

console.log(validator.isEmail('john@test.com'));
console.log(validator.isURL('https://johncritesdev.com'));