import { SEND_CHAT, SHOW_CHAT } from '../types/chat'
import { IChatData } from '../../declarations'

const sendChat = (chat: IChatData) => ({
  type: SEND_CHAT,
  payload: {
    chat,
  },
})

const showChat = (chat: IChatData) => ({
  type: SHOW_CHAT,
  payload: {
    chat,
  },
})

export { sendChat, showChat }
