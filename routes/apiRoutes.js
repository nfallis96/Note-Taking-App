const router = require('express').Router();
const path = require('path');
const dataBase = require('../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {
    res.json(dataBase.slice(1));
});

router.post('/notes', (req, res) => {
    const newNote = createNote(req.body, dataBase)
    res.json(newNote);
})

const createNote = (body, notesArray) => {
    const newNote = body;
    if (!notesArray)
        notesArray = [];
    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray.length;
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
};

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, dataBase);
    res.json(true);
})

// For deleting notes 
const deleteNote = (id, notesArray) => {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];
        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );
            break;
        }
    }
};

module.exports = router;