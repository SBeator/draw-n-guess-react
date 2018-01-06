import { CONNECTING, CONNECTED, CONNECTED_ERROR } from '../types/socket';

export function connect() {
  return {
    type: CONNECTING,
  };
}

export function connected() {
  return {
    type: CONNECTED,
  };
}

export function connectedError(error) {
  return {
    type: CONNECTED_ERROR,
    payload: {
      error,
    },
  };
}
