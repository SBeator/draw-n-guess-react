import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { socket as socketAction } from '../../actions';

class Socket extends Component {
  componentDidMount() {
    this.props.socketAction.connect();
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

Socket.propTypes = {
  children: PropTypes.node.isRequired,
  socketAction: PropTypes.shape({
    connect: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  socket: state.socket,
});

const mapDispatchToProps = dispatch => ({
  socketAction: bindActionCreators(socketAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Socket);
