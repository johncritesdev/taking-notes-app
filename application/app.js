const chalk = require('chalk');
const notes = require('./notes');

const msg = notes();

console.log(msg);

const note = chalk.bgRed.bold('Success');

console.log(note);
