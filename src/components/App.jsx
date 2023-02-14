import { Component } from 'react';
import { nanoid } from 'nanoid';
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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = newContact => {
    const contactFinder = this.state.contacts.some(
      ({ name, number }) =>
        newContact.name.toLowerCase() === name.toLowerCase() ||
        newContact.number === number
    );
    if (contactFinder) {
      alert(`${newContact.name} is already in contacts.`);
      return false;
    }

    const contact = {
      id: nanoid(),
      ...newContact,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    return true;
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
    const { filter, contacts } = this.state;
    const rendered = filter === '' ? contacts : this.filteredContacts();
    return (
      <Wrapper>
        <PhoneTitle>Phonebook</PhoneTitle>
        <Form addContact={this.addContact} />
        <PhoneContacts>Contacts</PhoneContacts>
        <Filter onInput={this.onFilterInput} />
        <Contacts contacts={rendered} deleteContact={this.deleteContact} />
      </Wrapper>
    );
  }
}

export default App;
