import React from 'react';
import { connect } from 'react-redux';
import Register from '../components/Register/Register';
import { registerAsync } from '../store/actions/authAction';

const RegisterContainer = ({ registerState, registerAsync }) => {
    return <Register registerState={registerState} register={registerAsync} />;
};

export default connect(
    // mapStateToProps
    ({ auth }) => ({
        registerState: auth.register,
    }),
    // mapDispatchToProps
    { registerAsync }
)(RegisterContainer);
