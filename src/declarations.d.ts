import { Action } from 'redux';
export interface IRootState {
  user: IUserState;
  socket: ISocketState;
}

export interface IUserState {
  name: string;
  status: string;
}

export type ISocketState = any;

export interface IPayloadAction extends Action {
  payload: any;
}
