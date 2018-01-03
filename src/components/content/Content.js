import React, { Component } from 'react';
import socket from '../../utils/socket';

class Content extends Component {
  componentDidMount() {
    socket.on('connect', (...args) => {
      console.log(`connected: ${args}`);
    });
    socket.on('chat', (...args) => {
      console.log(`chat: ${args}`);
    });

    socket.emit('chat', 'username', 'message');
  }

  render() {
    return <div>content</div>;
  }
}

export default Content;
