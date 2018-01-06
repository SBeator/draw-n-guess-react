import { CONNECTING, CONNECTED, CONNECTED_ERROR } from '../types/socket';

export default function reducer(state = {}, action) {
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
