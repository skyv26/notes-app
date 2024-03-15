import { createRequire } from 'module';
import chalk from 'chalk';
const require = createRequire(import.meta.url);

const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => {
    console.log(chalk.greenBright('\nAdding a new note !'));
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
    console.log('Removing a new note !');
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    console.log('Reading a note !');
  },
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => {
    console.log('Listing all notes!');
  },
});

console.log(yargs.argv);
