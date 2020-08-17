const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const fs = require('fs');

app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});

app.get('/:file', (req, res) => {
    let file = req.params.file;
    res.sendFile(path.join(__dirname, 'public/', file));
})

app.get('/resources/topics', (req, res) => {
    res.sendfile(path.join(__dirname, 'public/resources/topics'))
})

app.get('/resources/topics/:topic', (req, res) => {
    let topic = req.params.topic;
    let resources = fs.readdirSync(path.join(__dirname, 'public/resources/topics/'));
    let page = resources.filter(name => {
        return name === `${topic}.html`;
    });
    let filePath = path.join(__dirname, 'public/resources/topics', page[0]);
    console.log(filePath);

    res.sendFile(filePath);
});