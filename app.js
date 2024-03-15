const yargs = require('yargs');

yargs.version('1.0.1');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => {
    console.log('Adding a new note !');
  },
});
