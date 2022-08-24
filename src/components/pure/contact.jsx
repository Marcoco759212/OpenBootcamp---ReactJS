import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h1>Datos del contacto</h1>
            <h2> Nombre: {contact.name} </h2>
            <h2> Apellidos: {contact.lastName} </h2>
            <h2> Email: {contact.email} </h2>
            <h2> {contact.isConected ? 'Contacto En Línea' : 'Contacto No Disponible'} </h2>
        </div>
    );
}

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};

export default ContactComponent;
