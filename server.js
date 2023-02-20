const express = require('express');
const path = require('path');
const apiRoutes = require("./routes")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// HTML routes info
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.use(apiRoutes)

// App listenening at http://localhost:3001
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});