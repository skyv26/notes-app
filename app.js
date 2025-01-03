import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);

import chalk from 'chalk';
import JsonClass from './jsonFunc/jsonSystem.js';


const json = new JsonClass();
const fileName = './data.json';

const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    body: {
        describe: 'Note Body',
        demandOption: true,
        type: 'string'
    }
  },    
  handler: (argv) => {
    console.log(argv.body)
    console.log(chalk.greenBright('\nAdding a new note !'), argv);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
  },
  handler: () => {
    console.log('Removing a new note !');
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
  },
  handler: () => {
    console.log('Reading a note !');
  },
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => {
    const readObject = json.reader(path.join(__dirname, fileName));
    console.log(readObject)
  },
});

yargs.parse()