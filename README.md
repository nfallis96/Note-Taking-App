# Note Taker

GitHub Repo: https://github.com/nfallis96/Note-Taking-App

## Table of Contents
* [Description](#description)
* [Demo](#demo)
* [Code Examples](#code-examples)
* [Technologies Used](#technologies-used)
* [License](#license)


## Description

The purpose of this project was to create a note-taking application. The application allows a user to create, save and delete notes. It uses express.js for saving and deleting data from the backend(JSON file), which is required for the application to work.


## Demo




https://user-images.githubusercontent.com/111160410/225807063-603ba964-4364-455d-a6d7-362d4730e35b.mp4





## Code Examples

This example shows the option of deleting notes.

```js
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
        };
    };
};

```


## Technologies Used

![Java Badge](https://img.shields.io/badge/Language-JavaScript-blue)
![Node Badge](https://img.shields.io/badge/Environment-Node.js-yellow)
![HTML Badge](https://img.shields.io/badge/Language-HTML-green)
![CSS Badge](https://img.shields.io/badge/Language-CSS-red)
![Express Badge](https://img.shields.io/badge/Backend-Express.js-gray)
![Heroku Badge](https://img.shields.io/badge/Deployment-Heroku-purple)
![License Badge](https://img.shields.io/badge/License-MIT-pink)


## License

MIT License

Copyright (c) 2023 Nicole Fallis 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
