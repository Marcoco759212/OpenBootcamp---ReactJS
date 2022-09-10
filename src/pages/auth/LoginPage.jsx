import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormik from '../../components/pure/forms/loginFormik';
import '../../styles/loginFormik.scss'

const LoginPage = ({logged}) => {

    const history = useNavigate();

    const navigateTo = (path) => {
        history(path)
    }

    return (
        <div>
            <LoginFormik loggedTo={logged}></LoginFormik>
            <button onClick={ () => navigateTo('/signin') }
                className='btn-login-form'>
                Register
            </button>
        </div>
    );
}

export default LoginPage;
