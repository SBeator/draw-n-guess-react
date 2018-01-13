import { DRAWING, SHOW_LINE } from '../types/paint';
import { IDrawData } from '../../declarations';

const draw = (drawData: IDrawData) => ({
  type: DRAWING,
  payload: {
    drawData,
  },
});

const showLine = (drawData: IDrawData) => ({
  type: SHOW_LINE,
  payload: {
    drawData,
  },
});

export { draw, showLine };
