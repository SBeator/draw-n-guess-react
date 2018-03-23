import { SHOW_CHAT } from '../types/chat'
import { IChatAction, IChatState } from '../../declarations'

export default function reducer(
  state: IChatState = {
    chats: [],
  },
  action: IChatAction
): IChatState {
  switch (action.type) {
    case SHOW_CHAT:
      const chats = [...state.chats, action.payload.chat]
      return { chats }
    default:
      return state
  }
}
