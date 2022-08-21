import { Component } from 'react';
import { ContactsForm } from './ContactsForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { Box } from './Box';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleRemove = id => {
    console.log('remove');
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  formSubmitHandler = data => {
    console.log('data', data);
    this.state.contacts.find(contact => contact.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box p={4}>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList contacts={visibleContacts} onRemove={this.handleRemove} />
      </Box>
    );
  }
}
