import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';

const LoginPage = ({logged}) => {
    return (
        <div>
            <LoginFormik loggedTo={logged}></LoginFormik>
        </div>
    );
}

export default LoginPage;
