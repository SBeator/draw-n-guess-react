import { LOGIN } from '../types/user';
import socket from '../utils/socket';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      socket.on('connect', (...args) => {
        console.log(`connected: ${args}`);
      });
      socket.on('chat', (...args) => {
        console.log(`chat: ${args}`);
      });

      socket.emit('chat', 'balba', 'lalala');

      return { name: 'lalala' };
    default:
      return state;
  }
}
