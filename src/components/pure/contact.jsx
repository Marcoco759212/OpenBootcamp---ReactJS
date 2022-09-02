import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Contacts/contact.scss'

import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact, changeStatus, deleteContact}) => {

    return (
        <div>
            <h2 className='row-data'> 
                <span> Nombre: </span>
                <span> {contact.name} </span>
            </h2>
            <h2 className='row-data'> 
                <span> Apellidos: </span>
                <span> {contact.lastName} </span>
            </h2>
            <h2 className='row-data'> 
                <span> Email: </span>
                <span> {contact.email} </span>
            </h2>
            { 
                <div>
                    <h2 className='row-data'> 
                        <span>Contacto:</span>
                        <span style={ !contact.isConected ? { color: '#f19e28' } : { color: '#1db653' } }>
                            { contact.isConected ? 'En Línea' : 'No Disponible' }
                        </span>
                    </h2>
                    <div className='row-btns'>
                        <button onClick={ () => changeStatus(contact) }
                            className='status-btn'
                            style={ contact.isConected ? { background: '#f19e28' } : { background: '#1db653' } }>
                            { contact.isConected ? 'Desconectar' : 'Conectar' }
                        </button>
                        <button onClick={ () => deleteContact(contact) }
                            className='delete-btn'>
                            Eliminar
                        </button>
                    </div>
                </div>
            }

        </div>
    );
}

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact).isRequired,
    changeStatus : PropTypes.func.isRequired,
    deleteContact : PropTypes.func.isRequired
};

export default ContactComponent;