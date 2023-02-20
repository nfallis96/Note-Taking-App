const express = require('express');
const routes = require("./routes")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes)

// listen on port 3001
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});