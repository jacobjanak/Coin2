require('dotenv').config()
const express = require('express');
const path = require('path');
const blockchain = require('./blockchain.js');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/api/transactions', (req, res) => {

    // dummy data
    const transactions = [];
    transactions.push(new blockchain(transactions, '' + Math.random(), '' + Math.random(), Math.random()))
    transactions.push(new blockchain(transactions, 'mom', 'me', 100))
    transactions.push(new blockchain(transactions, 'DJ', 'me', 420))
    transactions.push(new blockchain(transactions, 'me', 'amazon', 1000))

    res.json(transactions)
})

app.listen(PORT, () => console.log('Server running at localhost:' + PORT))