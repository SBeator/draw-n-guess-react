import { eventChannel } from 'redux-saga';
import { put, take, call, fork, all } from 'redux-saga/effects';

import { SEND_CHAT } from '../types/chat';
import { showChat } from '../actions/chat';

import socket from '../../utils/socket';
import { IChatAction } from '../../declarations';

/* tslint:disable:no-console */

function createChatChannel() {
  return eventChannel(emit => {
    const showChatHandler = (user: string, message: string) => {
      emit(
        showChat({
          user,
          message,
        })
      );
    };

    socket.on('chat', showChatHandler);

    const unsubscribe = () => {
      socket.off('chat', showChatHandler);
    };

    return unsubscribe;
  });
}

function* emitSendChat(action: IChatAction) {
  yield socket.emit('chat', action.payload.chat);
}

function* handleSendChat() {
  while (true) {
    const action: IChatAction = yield take(SEND_CHAT);
    yield fork(emitSendChat, action);
  }
}

function* handleChatChannel() {
  const chatChannel = yield call(createChatChannel);

  while (true) {
    const userAction = yield take(chatChannel);
    yield put(userAction);
  }
}

export default function* chatSaga() {
  yield all([handleSendChat(), handleChatChannel()]);
}
