import { Action } from 'redux'
export interface IRootState {
  user: IUserState
  socket: ISocketState
  paint: IPaintState
  chat: IChatState
}

export interface IUserState {
  name: string
  status: string
}

export type ISocketState = any

export interface IPaintState {
  drawDatas: IDrawData[]
}

export interface IChatState {
  chats: IChatData[]
}

export interface IPayloadAction extends Action {
  payload: any
}

export interface IPaintAction extends IPayloadAction {
  payload: {
    drawData: IDrawData
  }
}

export interface IChatAction extends IPayloadAction {
  payload: {
    chat: IChatData
  }
}

export interface IDrawData {
  start: IPosition
  end: IPosition
  color: string
  lineWidth: number
}

export interface IPosition {
  x: number
  y: number
}

export interface IChatData {
  user?: string
  message: string
}

export interface IPaintMethod {
  color: string
  lineWidth: number
}
