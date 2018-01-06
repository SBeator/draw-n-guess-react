import { eventChannel } from 'redux-saga';
import { put, takeEvery, take, call } from 'redux-saga/effects';
import * as io from 'socket.io-client';

import { CONNECTING } from '../types/socket';
import { socket as socketAction } from '../actions';
import { serverPort } from '../../config';

/* tslint:disable:no-console */

function createSocketChannel(socket: SocketIOClient.Socket) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel(emit => {
    const connectionHandler = () => {
      console.log('connection');
      emit(socketAction.connected());
    };

    const connectErrorHandler = (error: string) => {
      console.log('connect_error');
      emit(socketAction.connectedError(error));
    };

    // setup the subscription
    socket.on('connect', connectionHandler);
    socket.on('connect_error', connectErrorHandler);

    const unsubscribe = () => {
      socket.on('connection', connectionHandler);
      socket.on('connect_error', connectErrorHandler);
    };

    return unsubscribe;
  });
}

function* handleSocketConnect() {
  const socket = io(`http://localhost:${serverPort}`);
  console.log(socket);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const action = yield take(socketChannel);
    yield put(action);
  }
}

export default function* socketConnect() {
  // yield console.log('socket');
  yield takeEvery(CONNECTING, handleSocketConnect);
}
