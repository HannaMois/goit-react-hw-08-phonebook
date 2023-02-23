// import useLocalStorage from './Hooks/useLocalStorage';
import {
  Wrapper,
  PhoneTitle,
  PhoneContacts,
  PhoneNoContacts,
} from './App.styled';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
// import { useSelector } from 'react-redux';

const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  const contacts = useSelector(selectContacts);

  return (
    <Wrapper>
      <PhoneTitle>Phonebook</PhoneTitle>
      <Form />
      <PhoneContacts>Contacts</PhoneContacts>
      {contacts.length === 0 ? (
        <PhoneNoContacts>No contacts</PhoneNoContacts>
      ) : (
        <>
          <Filter />
          <Contacts />
        </>
      )}
    </Wrapper>
  );
};

export default App;
