const express = require('express');
const app = express();
const path = require('path');
const { Message } = require('../db');

app.listen(1312, () => console.log('listening on port 1312'));

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (error) {
        next(error);
    }
});

app.get('/message', async (req, res, next) => {
    try {
        const response = await Message.findByPk(1);
        // console.log('>>>>>>>>>>>>>>>>', response);
        res.send(response);
    } catch (error) {
        next(error);
    }
});
