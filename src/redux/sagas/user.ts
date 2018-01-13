import { eventChannel } from 'redux-saga';
import { put, take, call } from 'redux-saga/effects';

import { LOGGING } from '../types/user';
import { login } from '../actions/user';

import socket from '../../utils/socket';
import { IPayloadAction } from '../../declarations';

/* tslint:disable:no-console */

function createUserLoginChannel() {
  return eventChannel(emit => {
    const loginHandler = (name: string) => {
      emit(login(name));
    };

    socket.on('login', loginHandler);

    const unsubscribe = () => {
      socket.off('login', loginHandler);
    };

    return unsubscribe;
  });
}

function* handleUserLogin(action: IPayloadAction) {
  socket.emit('login', action.payload.name);
  const userChannel = yield call(createUserLoginChannel);

  while (true) {
    const userAction = yield take(userChannel);
    yield put(userAction);
  }
}

export default function* userSaga() {
  const action: IPayloadAction = yield take(LOGGING);

  yield handleUserLogin(action);
}
