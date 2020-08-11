const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;
// req.get('host');
console.log(port);

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});

app.get('/', (req, res) => {
    res.send('hello');
});