import * as io from 'socket.io-client'
import { serverPort } from '../config'

const socket = io(`http://localhost:${serverPort}`, {
  autoConnect: false,
})

export default socket
