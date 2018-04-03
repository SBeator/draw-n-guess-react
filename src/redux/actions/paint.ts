import { DRAWING, SHOW_LINE, CHANGE_PAINT_METHOD } from '../types/paint'
import { IDrawData, IPaintMethod } from '../../declarations'

const draw = (drawData: IDrawData) => ({
  type: DRAWING,
  payload: {
    drawData,
  },
})

const showLine = (drawData: IDrawData) => ({
  type: SHOW_LINE,
  payload: {
    drawData,
  },
})

const changePaintMethod = (paintMethod: IPaintMethod) => ({
  type: CHANGE_PAINT_METHOD,
  payload: {
    paintMethod,
  },
})

export { draw, showLine, changePaintMethod }
