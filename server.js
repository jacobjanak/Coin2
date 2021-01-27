require('dotenv').config()
const express = require('express');
const path = require('path');
const blockchain = require('./blockchain');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(PORT, () => console.log('Server running at localhost:' + PORT))