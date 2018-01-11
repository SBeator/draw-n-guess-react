import { all } from 'redux-saga/effects';

import socket from './socket';
import user from './user';

export default function* rootSaga() {
  yield all([socket(), user()]);
}
