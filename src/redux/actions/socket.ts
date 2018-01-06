import { CONNECTING, CONNECTED, CONNECTED_ERROR } from '../types/socket';

const connect = () => ({
  type: CONNECTING,
});

const connected = () => ({
  type: CONNECTED,
});

const connectedError = (errorMessage: string) => ({
  type: CONNECTED_ERROR,
  payload: {
    errorMessage,
  },
});

export { connect, connected, connectedError };
