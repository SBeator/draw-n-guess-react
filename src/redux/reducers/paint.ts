import { SHOW_LINE, CHANGE_PAINT_METHOD } from '../types/paint'
import { ISocketState, IPaintAction, IPaintState } from '../../declarations'

export default function reducer(
  state: IPaintState = {
    drawDatas: [],
    paintMethod: {
      color: '#000',
      lineWidth: 2,
    },
  },
  action: IPaintAction
): ISocketState {
  switch (action.type) {
    case SHOW_LINE:
      const drawDatas = [...state.drawDatas, action.payload.drawData]
      return { ...state, drawDatas }
    case CHANGE_PAINT_METHOD:
      const paintMethod = action.payload.paintMethod
      return { ...state, paintMethod }
    default:
      return state
  }
}
