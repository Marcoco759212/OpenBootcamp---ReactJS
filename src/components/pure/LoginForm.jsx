import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
        password: Yup.string()
                    .required('Password is required')
    }
);

const LoginForm = ({logged, fetching, onLogin}) => {

    const initialCredentials = {
        email: '',
        password: ''
    }
     
    // const history = useNavigate();

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
                initialValues={ initialCredentials }
                validationSchema={ loginSchema }
                onSubmit={ async (values) => {
                    // await new Promise((r) => setTimeout(r, 1000));
                    // alert(JSON.stringify(values, null, 2));
                    // await localStorage.setItem('credentials',values)
                    // history('/profile')
                    // loggedTo()
                    onLogin(values.email, values.password)
                }}>

                {( {values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur} ) => (
                        <Form className='form'>
                            <label htmlFor='email'>
                                Email
                            </label>
                            <Field id='email' 
                                name='email' 
                                type='email' 
                                placeholder='your@email.com'/>

                            { errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component="div"></ErrorMessage>
                                )    
                            }

                            <label htmlFor='password'>
                                Password
                            </label>
                            <Field id='password' 
                                name='password' 
                                type='password' 
                                placeholder='your password'/>

                            { errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component="div"></ErrorMessage>
                                )    
                            }

                            <button type='submit'>Login</button>
                            {fetching ? (<p>LOADING</p>) : null}
                            {isSubmitting ? (<p>Login your credentials</p>) : null}
                        </Form>
                )}
            </Formik>
        </div>
    );
};


LoginForm.propTypes = {
    logged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};


export default LoginForm;
