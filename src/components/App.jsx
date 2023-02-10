import { Component } from 'react';
import { Wrapper, PhoneTitle, PhoneContacts } from './App.styled';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onFilterInput = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filteredContacts = () => {
    return [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  deleteContact = evt => {
    const elemToRemove = evt.currentTarget.parentNode.id;
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== elemToRemove),
    });
  };

  render() {
    return (
      <Wrapper>
        <PhoneTitle>Phonebook</PhoneTitle>

        <Form addContact={this.addContact} contacts={this.state.contacts} />
        <PhoneContacts>Contacts</PhoneContacts>
        <Filter onInput={this.onFilterInput} />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          filteredContacts={this.filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}

export default App;
