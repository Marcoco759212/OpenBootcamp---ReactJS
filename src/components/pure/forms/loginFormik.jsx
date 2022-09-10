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

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
                initialValues={ initialCredentials }
                validationSchema={ loginSchema }
                onSubmit={ async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    await localStorage.setItem('credentials',values)
                    history('/profile')
                    loggedTo()
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
                            {isSubmitting ? (<p>Login your credentials</p>) : null}
                        </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
