import { eventChannel } from 'redux-saga';
import { put, take, call, fork, all } from 'redux-saga/effects';

import { DRAWING } from '../types/paint';
import { showLine } from '../actions/paint';

import socket from '../../utils/socket';
import { IPaintAction, IDrawData } from '../../declarations';

/* tslint:disable:no-console */

function createPaintChannel() {
  return eventChannel(emit => {
    const showLineHandler = (drawData: IDrawData) => {
      emit(showLine(drawData));
    };

    socket.on('drawLine', showLineHandler);

    const unsubscribe = () => {
      socket.off('drawLine', showLineHandler);
    };

    return unsubscribe;
  });
}

function* emitDrawLine(action: IPaintAction) {
  yield socket.emit('drawLine', action.payload.drawData);
}

function* handlePaint() {
  while (true) {
    const action: IPaintAction = yield take(DRAWING);
    yield fork(emitDrawLine, action);
  }
}

function* handlePaintChannel() {
  const paintChannel = yield call(createPaintChannel);

  while (true) {
    const userAction = yield take(paintChannel);
    yield put(userAction);
  }
}

export default function* paintSaga() {
  yield all([handlePaint(), handlePaintChannel()]);
}
