import * as React from 'react';
import { Component } from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { chat as chatAction } from '../../redux/actions';
import {
  IRootState,
  IChatState,
  IChatAction,
  IChatData,
} from '../../declarations';

class Chat extends Component<Props> {
  messageInput: HTMLInputElement;

  constructor(props: Props) {
    super(props);

    this.onSendChat = this.onSendChat.bind(this);
  }

  onSendChat(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.sendChat({
      message: this.messageInput.value,
    });

    this.messageInput.value = '';
  }

  getChatList() {
    let index = 0;
    return (
      <ul>
        {this.props.chat.chats.map(chat => (
          <li key={`${chat.message}_${index++}`}>{`${chat.user}:${
            chat.message
          }`}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.getChatList()}
        <form onSubmit={this.onSendChat}>
          <input
            ref={input => (this.messageInput = input as HTMLInputElement)}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export interface Props {
  chat: IChatState;
  sendChat: (chatData: IChatData) => IChatAction;
}

const mapStateToProps = (state: IRootState) => ({
  chat: state.chat,
});

const mapDispatchToProps = (dispatch: Dispatch<IRootState>) =>
  bindActionCreators(
    {
      sendChat: chatAction.sendChat,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
