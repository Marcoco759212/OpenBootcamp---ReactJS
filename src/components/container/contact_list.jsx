import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact('Pepe', 'Pecas', 'pppecas@nospam.com', true);

    return (
        <div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactListComponent;
