import React from 'react';
import { List, ListItem } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onRemove }) => {
  return (
    <List>
      <ListItem key={id}>
        {name}: {number}
      </ListItem>
      <button type="button" onClick={() => onRemove(id)}>
        Delete
      </button>
    </List>
  );
};

export default ContactItem;
