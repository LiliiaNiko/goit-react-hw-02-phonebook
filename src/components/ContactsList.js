import React from 'react';
import ContactItem from './ContactItem';

const ContactsList = ({ contacts, onRemove }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
