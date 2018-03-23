import { combineReducers } from 'redux'

import user from './user'
import socket from './socket'
import paint from './paint'
import chat from './chat'

export default combineReducers({
  user,
  socket,
  paint,
  chat,
})
