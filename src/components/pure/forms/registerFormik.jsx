import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { User } from '../../../models/users.class';
import { ROLES } from '../../../models/roles.enum';
import '../../../styles/registerFormik.scss'

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'passwords must match'
                    )
                })
                .required('You must confirm the password'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: user/admin')
                .required('Role is required')
        }
    )

    const submit = (values) => {
        console.log('Register user');
    }

    return (
        <div>
             <h4>Register Formik</h4>
             <Formik 
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={
                    async (values) => {
                        await new Promise((r) => setTimeout(r, 1000));
                        alert(JSON.stringify(values, null, 2));
                    }
                }>
                {
                    ({
                        values,
                        errors,
                        touched,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    }) => (
                        <Form className='register-form'>
                            <label htmlFor='username'>
                                Username
                            </label>
                            <Field id='username' 
                                name='username' 
                                type='text' 
                                placeholder='your username'/>
                            { errors.username && touched.username && 
                                (
                                    <ErrorMessage name="username" component="div"></ErrorMessage>
                                )    
                            }
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

                            
                            <label htmlFor='confirm'>
                                Password
                            </label>
                            <Field id='confirm' 
                                name='confirm' 
                                type='confirm' 
                                placeholder='Confirm password'/>

                            { errors.confirm && touched.confirm && 
                                (
                                    <ErrorMessage name="confirm" component="div"></ErrorMessage>
                                )    
                            }

                            <button type='submit'>Register acount</button>
                            {isSubmitting ? (<p>Registering user...</p>) : null}
                        </Form>
                    )
                }
             </Formik>
        </div>
    );
}

export default RegisterFormik;
