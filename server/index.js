const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { serverPort } = require('../src/config');

const app = express();

app.use(express.static(`${__dirname}/public`));

const server = http.createServer(app);
server.listen(serverPort, () => {
  console.log(`Server running at :${serverPort}`);
});

const io = socketIo.listen(server);

let lineHistory = [];

io.on('connection', (socket) => {
  lineHistory.forEach((data) => {
    socket.emit('drawLine', data);
  });
  socket.on('drawLine', (data) => {
    lineHistory.push(data);
    io.emit('drawLine', data);
  });
  socket.on('clear', () => {
    lineHistory = [];
    io.emit('clear');
  });
  socket.on('login', (name) => {
    io.emit('chat', 'Bot', `Welcome ${name} to join`);
  });

  socket.on('chat', (username, message) => {
    if (message.startsWith('http') &&
      (message.endsWith('jpg') || message.endsWith('png'))) {
      io.emit('drawImage', message);
    } else {
      io.emit('chat', username, message);
    }
  });
});
