const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { serverPort } = require('../src/config');
// import * as serverPort from '../config';

// const serverPort = '8888';

const app = express();

app.use(express.static(`${__dirname}/public`));

const server = http.createServer(app);
server.listen(serverPort, () => {
  /* tslint:disable:no-console */
  console.log(`Server running at :${serverPort}`);
  /* tslint:enable */
});

const io = socketIo.listen(server);

const log = console.log;

let lineHistory = [];

io.on('connection', socket => {
  log('connected');

  lineHistory.forEach(data => {
    socket.emit('drawLine', data);
  });
  socket.on('drawLine', data => {
    lineHistory.push(data);
    io.emit('drawLine', data);
  });
  socket.on('clear', () => {
    lineHistory = [];
    io.emit('clear');
  });
  socket.on('login', name => {
    log(`${name} is login`);
    socket.emit('login', name);
    io.emit('chat', 'Bot', `Welcome ${name} to join`);
  });

  socket.on('chat', (username, message) => {
    if (
      message.startsWith('http') &&
      (message.endsWith('jpg') || message.endsWith('png'))
    ) {
      io.emit('drawImage', message);
    } else {
      io.emit('chat', username, message);
    }
  });
});
