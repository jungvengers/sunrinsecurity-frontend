import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { loginAsync } from '../store/actions/authAction';

const LoginContainer = ({ loginState, loginAsync }) => {
    return <Login loginState={loginState} login={loginAsync} />;
};

export default connect(
    // mapStateToProps
    ({ auth }) => ({
        loginState: auth.login,
    }),
    // mapDispatchToProps
    { loginAsync }
)(LoginContainer);