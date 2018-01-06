import { Action } from 'redux';
export interface RootState {
  user: UserState;
  socket: SocketState;
}

export type UserState = any;
export type SocketState = any;

export interface PayloadAction extends Action {
  payload?: any;
}
