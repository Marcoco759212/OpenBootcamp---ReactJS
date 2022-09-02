import React, { useState, useEffect } from 'react';
import { Contact } from '../../models/contact.class';
import '../../styles/Contacts/contact_list.scss'

import ContactForm from '../forms/contactForm';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact1 = new Contact('Pepe', 'Pecas', 'pppecas@nospam.com', false);
    const defaultContact2 = new Contact('Cristiano', 'Ronaldo', 'cristiano@nospam.com', false);
    const defaultContact3 = new Contact('Checko', 'Perez', 'cheko@nospam.com', true);
    const defaultContact4 = new Contact('Tony', 'Stark', 'Tony@nospam.com', true);

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3, defaultContact4]);
    const [dataContact, setdataContact] = useState('');
    const [view, setView] = useState('list');

    useEffect(() => {
        console.log('Lista de contactos cambiada');
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [contacts]);

    const showList = () => {
       if(view === 'list'){
            return(
                <div className='container'>
                    <h1 className='header-list'>Lista de contactos</h1>
                    <ul className='contact-list'>
                        { contacts.map((contact, i) => {
                        return(
                            <li key={i}
                                onClick={() => showContact(i)}
                                className='row-list'>
                                <span>{`${contact.name} ${contact.lastName}`}</span>
                                <span style={ !contact.isConected ? { color: '#f19e28' } : { color: '#1db653' } }>
                                    {contact.isConected ? 'Conectado' : 'Desconectado'}
                                </span>
                            </li>
                        )
                        }) }
                    </ul>
                    <button onClick={showFormContact}
                        className='add-contact'>
                        Agregar contacto
                    </button>
                </div>
            )
       } else if(view === 'contact'){
            return(
                <div className='contact-container'>
                    <div onClick={hideContact}
                        className='back-btn-contact'>{'< Regresar'}</div>
                    <ContactComponent contact={dataContact}
                        changeStatus={changeConnectDisconnect}
                        deleteContact={deleteContact}>
                    </ContactComponent>
                </div>
            )
       } else if (view === 'form'){
            return(
                <ContactForm addContat={addContact}
                    hideForm={hideFormContact}>
                </ContactForm>
            )
       }
    }

    const showContact = (key) => {
        setdataContact(contacts[key])
        setView('contact')
    }

    const hideContact = () => {
        setdataContact()
        setView('list')
    }

    const showFormContact = () => {
        setView('form')
    }

    const hideFormContact = () => {
        console.log('Hide Form');
        setView('list')
    }

    const addContact = (contact) => {
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    const changeConnectDisconnect = (contact) => {
        console.log('change status');
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].isConected = !tempContacts[index].isConected
        setContacts(tempContacts)
    }   

    const deleteContact = (contact) => {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index,1)
        setContacts(tempContacts)
        setView('list')
    }

    return (
        <div>
            {showList()}
        </div>
    );
}

export default ContactListComponent;