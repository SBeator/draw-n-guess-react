import { SHOW_LINE } from '../types/paint'
import { ISocketState, IPaintAction, IPaintState } from '../../declarations'

export default function reducer(
  state: IPaintState = {
    drawDatas: [],
  },
  action: IPaintAction
): ISocketState {
  switch (action.type) {
    case SHOW_LINE:
      const drawDatas = [...state.drawDatas, action.payload.drawData]
      return { drawDatas }
    default:
      return state
  }
}
