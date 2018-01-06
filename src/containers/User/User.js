import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../../utils/socket';

import * as userActions from '../../actions/user';

class User extends Component {
  componentDidMount() {
    socket.on('connect', () => {
      this.props.socketAction.connectted();
    });

    this.props.socketAction.connectting();
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

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  userActions: PropTypes.shape({
    login: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
