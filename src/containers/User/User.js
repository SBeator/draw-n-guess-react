import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/user';

class User extends Component {
  componentDidMount() {
    this.props.userActions.login('Xingxin');
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
