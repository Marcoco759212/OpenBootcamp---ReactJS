import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Contacts/contactForm.scss'

import { Contact } from '../../models/contact.class';

const ContactForm = ({addContat, hideForm}) => {

    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')

    const createContact = (e) => {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        );
        console.log(newContact);
        addContat(newContact)
        hideForm()
    }

    return (
        <div className='container'>
            <button onClick={ () => hideForm() }
                className='back-btn'>
                {`< Regresar`}
            </button>
            <form onSubmit={ createContact }
                className='form-contact'>
                <input ref={nameRef} 
                        id='inputName' 
                        type='text' 
                        className='data-inputs' 
                        required 
                        autoFocus
                        placeholder='Nombre del contacto'
                />
                <input ref={lastNameRef} 
                        id='inputLastName' 
                        type='text' 
                        className='data-inputs' 
                        required 
                        placeholder='Apellidos del contacto'
                />
                <input ref={emailRef} 
                        id='inputEmail' 
                        type='text' 
                        className='data-inputs' 
                        required 
                        placeholder='Email del contacto'
                />
                <button type='submit'
                    className='create-contact'>
                    Crear contacto
                </button>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    addContat: PropTypes.func.isRequired,
    hideForm: PropTypes.func.isRequired
}

export default ContactForm;
