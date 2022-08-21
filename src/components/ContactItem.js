import React from 'react';
import { List, ListItem, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onRemove }) => {
  return (
    <List>
      <ListItem key={id}>
        {name}: {number}
      </ListItem>
      <Button type="button" onClick={() => onRemove(id)}>
        Delete
      </Button>
    </List>
  );
};

export default ContactItem;
