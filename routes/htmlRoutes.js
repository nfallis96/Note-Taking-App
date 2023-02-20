const router = require('express').Router();
const path = require('path');

// Render index.html at localhost:3001
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Render notes.html at localhost:3001/notes
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = router;