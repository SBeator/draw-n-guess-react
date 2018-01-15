import { all } from 'redux-saga/effects';

import socket from './socket';
import user from './user';
import paint from './paint';
import chat from './chat';

export default function* rootSaga() {
  yield all([socket(), user(), paint(), chat()]);
}
