const chalk = require ('chalk');
const yargs = require('yargs');
const notes = require('./notes')

//Customized yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption : true,
            type: String
        },
        body:{
            describe: 'Note Body',
            demandOption : true, 
            type: String 
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe: 'remove a note',
    handler : function(argv){
        notes.removeNote(argv.title);
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler : function(){
        console.log('Reading a note')
    }
})

//list all notes
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        console.log('Listing all notes')
    }
})

//add, remove, read, list

yargs.parse();
