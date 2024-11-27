const fs = require('fs');

const getNotes = function(){
    return "Your notes..";
}

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note){
        return note.title === title;
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title : title,
            body: body
        })
        saveNotes(notes);
        console.log("New note added");
    } else{
        console.log('Note title taken');
    }
    
}

const removeNote = function(title){
    const notes = loadNotes();
    const deleteNote = notes.filter(function(note) {
        return note.title !== title;
    })
    if(deleteNote.length === notes.length){
        console.log('Note with title doesnot exist');
    }else{
        saveNotes(deleteNote);
        console.log('note deleted succesfully');
    }
    
    
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json') //data buffer comes in numbers
        const dataJSON = dataBuffer.toString(); // data buffer is converted into string 
        return JSON.parse(dataJSON); // string data requires parsing converted into an object
    } catch(e){
        return [];
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote : removeNote
}