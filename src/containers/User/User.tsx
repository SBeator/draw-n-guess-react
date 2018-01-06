import * as React from 'react';
import { Component } from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { user as userActions } from '../../redux/actions';
import { RootState } from '../../declarations';

class User extends Component<Props> {
  componentDidMount() {
    // socket.on('connect', () => {
    //   this.props.socketAction.connectted();
    // });
    // this.props.socketAction.connectting();
  }

  render() {
    return (
      <div>
        <p>User:</p>
        <p>{this.props.user.name}</p>
      </div>
    );
  }
}

export interface Props {
  user: {
    name: string;
  };
  login: () => {
    type: string;
  };
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) =>
  bindActionCreators(
    {
      login: userActions.login,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(User);
