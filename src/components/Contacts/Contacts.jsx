import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';

import {
  ContactsList,
  ListItem,
  ContactName,
  ContactPhone,
  DeleteButton,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsList>
      {filteredContacts.map(({ name, id, number }) => (
        <ListItem key={id}>
          <ContactName>{name} </ContactName>
          <ContactPhone>{number}</ContactPhone>

          {isLoading ? (
            <DeleteButton
              onClick={() => deleteContacts(id)}
              aria-label="delete contact"
              disabled
            >
              Delete
            </DeleteButton>
          ) : (
            <DeleteButton
              onClick={() => deleteContacts(id)}
              aria-label="delete contact"
            >
              Delete
            </DeleteButton>
          )}
        </ListItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
