import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import {login, 
    getAllUsers, 
    getAllPageUsers, 
    getUserByID, 
    createUser,
    updateUser,
    deleteUser} from '../../Services/axiosCRUDService.js'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
        password: Yup.string()
                    .required('Password is required')
    }
);


const AxiosCRUDExample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }
     

    const authUser = (values) => {
        // login('eve.holt@reqres.in','pistol')
        login(values.email, values.password)
            .then((response) => {
                if(response.data.token){
                    alert(JSON.stringify(response.data));
                    sessionStorage.setItem('token',response.data.token)
                }else{
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                }
                
            }).catch((error) => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem('token')
            }).finally(() => {
                console.log('Login done');
            })
    }

    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data))
            }).catch((error) => {
                alert(`Something went wrong: ${error}`)
            }).finally(() => {
                console.log('Obtain all users finally');
            })
    }

    const obtainAllPageUsers = (page) => {
        getAllPageUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data))
            }).catch((error) => {
                alert(`Something went wrong: ${error}`)
            }).finally(() => {
                console.log('Obtain all users finally');
            })
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                alert(JSON.stringify(response.data))
            }).catch((error) => {
                alert(`Something went wrong: ${error}`)
            }).finally(() => {
                console.log('Obtain all users finally');
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if(response.status === 201){
                    alert(JSON.stringify(response.data));
                }else{
                    throw new Error('User not created');
                }
            }).catch((error) => {
                alert(`Something went wrong: ${error}`);
            }).finally(() => {
                console.log('Obtain all users finally');
            })
    }

    const updateUserByID = (id, name, job) => {
        updateUser(id, name, job)
            .then((response) => {
                alert(JSON.stringify(response.data))
            }).catch((error) => {
                alert(`Something went wrong: ${error}`)
            }).finally(() => {
                console.log('Update users finally');
            })
    }

    const deleteUserByID = (id) => {
        deleteUser(id)
            .then((response) => {
                alert(`User with id: ${id} succesfully deleted`)
            }).catch((error) => {
                alert(`Something went wrong: ${error}`)
            }).finally(() => {
                console.log('Delete users finally');
            })
    }

    return (
        <div>
            <Formik 
                initialValues={ initialCredentials }
                validationSchema={ loginSchema }
                onSubmit={ async (values) => {
                    authUser(values)
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
                        </Form>
                )}
            </Formik>
            <div>
                <button onClick={obtainAllUsers}>
                    Get all Users
                </button>

                <button onClick={ () => obtainAllPageUsers(1)}>
                    Get all users (page 1)
                </button>

                <button onClick={ () => obtainUserByID(1)}>
                    Obtain user by ID
                </button>

                <button onClick={ () => createNewUser('morpheus', 'leader')}>
                    Create New User
                </button>
                <button onClick={ () => updateUserByID(1, 'morpheus', 'leader')}>
                    Update user
                </button>
                <button onClick={ () => deleteUserByID(1)}>
                    Create New User
                </button>
            </div>
        </div>
    );
}

export default AxiosCRUDExample;
