import { combineReducers } from 'redux';

import user from './user';
import socket from './socket';
import paint from './paint';

export default combineReducers({
  user,
  socket,
  paint,
});
