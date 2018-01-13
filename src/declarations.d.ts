import { Action } from 'redux';
export interface IRootState {
  user: IUserState;
  socket: ISocketState;
  paint: IPaintStae;
}

export interface IUserState {
  name: string;
  status: string;
}

export type ISocketState = any;

export interface IPaintStae {
  drawDatas: IDrawData[];
}

export interface IPayloadAction extends Action {
  payload: any;
}

export interface IPaintAction extends IPayloadAction {
  payload: {
    drawData: IDrawData;
  };
}

export interface IDrawData {
  start: IPosition;
  end: IPosition;
  color: string;
  lineWidth: number;
}

export interface IPosition {
  x: number;
  y: number;
}
