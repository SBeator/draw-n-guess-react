import { DRAWING, SHOW_LINE, CHANGE_PAINT_METHOD } from '../types/paint'
import {
  IDrawData,
  IPaintMethod,
  TPaintActionCreator,
} from '../../declarations'

const draw: TPaintActionCreator = (drawData: IDrawData) => ({
  type: DRAWING,
  payload: {
    drawData,
  },
})

const showLine: TPaintActionCreator = (drawData: IDrawData) => ({
  type: SHOW_LINE,
  payload: {
    drawData,
  },
})

const changePaintMethod: TPaintActionCreator = (paintMethod: IPaintMethod) => ({
  type: CHANGE_PAINT_METHOD,
  payload: {
    paintMethod,
  },
})

export { draw, showLine, changePaintMethod }
