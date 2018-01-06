import { CONNECTING, CONNECTED, CONNECTED_ERROR } from '../types/socket';
import { SocketState, PayloadAction } from '../../declarations';

export default function reducer(
  state: SocketState = {},
  action: PayloadAction
): SocketState {
  switch (action.type) {
    case CONNECTING:
      return { status: CONNECTING };
    case CONNECTED:
      return { status: CONNECTED };
    case CONNECTED_ERROR:
      return { status: CONNECTED_ERROR, payload: action.payload };
    default:
      return state;
  }
}
