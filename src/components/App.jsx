import { useState } from 'react';
import useLocalStorage from './Hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { Wrapper, PhoneTitle, PhoneContacts } from './App.styled';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const contactFinder = contacts.some(
      ({ name, number }) =>
        newContact.name.toLowerCase() === name.toLowerCase() ||
        newContact.number === number
    );
    if (contactFinder) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(),
      ...newContact,
    };

    setContacts(prevContact => [...prevContact, contact]);
  };

  const onFilterInput = evt => {
    setFilter(evt.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = evt => {
    const elemToRemove = evt.currentTarget.parentNode.id;
    setContacts(contacts.filter(item => item.id !== elemToRemove));
  };

  const rendered = filter === '' ? contacts : filteredContacts();
  return (
    <Wrapper>
      <PhoneTitle>Phonebook</PhoneTitle>
      <Form addContact={addContact} />
      <PhoneContacts>Contacts</PhoneContacts>
      <Filter onFilterInput={onFilterInput} value={filter} />
      <Contacts contacts={rendered} deleteContact={deleteContact} />
    </Wrapper>
  );
};

export default App;
