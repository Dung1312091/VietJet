import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../../components/User';
import { login } from './action';
import { createSelector } from 'reselect';

const getName = state => state.user.userName;

const testReselects = createSelector([getName], name => {
  console.log('userName', name);
});
const testReselect = userName => {
  console.log('userName', userName);
};
export class UserProfile extends Component {
  render() {
    console.log('aa');
    return (
      <div>
        <User {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.user.email,
    loaded: state.user.loaded,
    lang: state.user.lang,
    userName: testReselects(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(login(user));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
