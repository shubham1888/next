const express = require('express');
const socketio = require('socket.io');
const cors = require("cors")

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

const server = app.listen(5000, () => {
    console.log('Server listening on port 5000');
});

const io = socketio(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('send message', (message) => {
        console.log(`Message received: ${message}`);
        io.emit('new message', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});
