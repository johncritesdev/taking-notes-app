const chalk = require('chalk');
const notes = require('./notes');

const msg = notes();

console.log(msg);

const note = chalk.blue.bold('hello world');

console.log(note);
