import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate} from 'react-router-dom'
import '../../../styles/loginFormik.scss'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
        password: Yup.string()
                    .required('Password is required')
    }
);

const LoginFormik = ({loggedTo}) => {

    const initialCredentials = {
        email: '',
        password: ''
    }
     
    const history = useNavigate();

    const loggin = (response, values) => {
        const resultVals = JSON.parse(response);
        if(values.email === resultVals.email
            && values.password === resultVals.password){
                loggedTo()
                history('/tasks')
        }else{
            alert('Usuario o password incorrectos')
        }
        // 
    }

    return (
        <div>
            <h1>Login Formik</h1>
            <Formik 
                initialValues={ initialCredentials }
                validationSchema={ loginSchema }
                onSubmit={ async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    //alert(JSON.stringify(values, null, 2));
                    const response = await localStorage.getItem('credentials')
                    loggin(response, values)
                }}>

                {( {values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur} ) => (
                        <Form className='form'>
                            <div className='rows-form'>
                                <label htmlFor='email'
                                    className='labels-login-form'>
                                    Email
                                </label>
                                <div className='cols-form'>
                                    <Field id='email' 
                                        name='email' 
                                        type='email' 
                                        placeholder='your@email.com'
                                        className='inputs-login-form'
                                        />

                                    { errors.email && touched.email && 
                                        (
                                            <ErrorMessage name="email" 
                                                component="div"
                                                className='messages-form'></ErrorMessage>
                                        )    
                                    }
                                </div>
                            </div>
                            <div className='rows-form'>
                                <label htmlFor='password'
                                    className='labels-login-form'>
                                    Password
                                </label>
                                <div className='cols-form'>
                                    <Field id='password' 
                                        name='password' 
                                        type='password' 
                                        placeholder='your password'
                                        className='inputs-login-form'
                                        />

                                    { errors.password && touched.password && 
                                        (
                                            <ErrorMessage name="password" 
                                                component="div"
                                                className='messages-form'></ErrorMessage>
                                        )    
                                    }
                                </div>
                            </div>
                            <button type='submit'
                                className='btn-form'>
                                    Login
                            </button>
                            {isSubmitting ? (<p>Login your credentials</p>) : null}
                        </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
