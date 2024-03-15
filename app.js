const yargs = require('yargs');

yargs.version('1.0.1');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => {
    console.log('Adding a new note !');
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
