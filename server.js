const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/projects'));
});

app.get('/tips', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/tips'));
});

app.get('/resources', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/resources'));
});