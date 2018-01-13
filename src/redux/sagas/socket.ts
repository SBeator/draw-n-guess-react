import { eventChannel } from 'redux-saga';
import { put, takeEvery, take, call } from 'redux-saga/effects';

import { CONNECTING } from '../types/socket';
import { socket as socketAction } from '../actions';
import socket from '../../utils/socket';

function createSocketChannel() {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel(emit => {
    const connectionHandler = () => {
      emit(socketAction.connected());
    };

    const connectErrorHandler = (error: string) => {
      emit(socketAction.connectedError(error));
    };

    // setup the subscription
    socket.on('connect', connectionHandler);
    socket.on('connect_error', connectErrorHandler);

    const unsubscribe = () => {
      socket.off('connection', connectionHandler);
      socket.off('connect_error', connectErrorHandler);
    };

    return unsubscribe;
  });
}

function* handleSocketConnect() {
  socket.open();
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const action = yield take(socketChannel);
    yield put(action);
  }
}

export default function* socketSaga() {
  // yield console.log('socket');
  yield takeEvery(CONNECTING, handleSocketConnect);
}
