import { CONNECTING, CONNECTED, CONNECTED_ERROR } from '../types/socket'
import { ISocketState, IPayloadAction } from '../../declarations'

export default function reducer(
  state: ISocketState = {},
  action: IPayloadAction
): ISocketState {
  switch (action.type) {
    case CONNECTING:
      return { status: CONNECTING }
    case CONNECTED:
      return { status: CONNECTED }
    case CONNECTED_ERROR:
      return { status: CONNECTED_ERROR, payload: action.payload }
    default:
      return state
  }
}
