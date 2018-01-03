import io from 'socket.io-client';
import { serverPort } from '../config'

export default io(`http://localhost:${serverPort}`);
