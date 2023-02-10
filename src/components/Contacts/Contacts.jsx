import PropTypes from 'prop-types';

import {
  ContactsList,
  ListItem,
  ContactName,
  ContactPhone,
  DeleteButton,
} from './Contacts.styled';

const Contacts = ({ contacts, filter, filteredContacts, deleteContact }) => {
  let rendered = filter === '' ? contacts : filteredContacts();
  return (
    <ContactsList>
      {rendered.map(({ name, id, number }) => (
        <ListItem key={id} id={id}>
          <ContactName>{name} </ContactName>
          <ContactPhone>{number}</ContactPhone>

          <DeleteButton
            onClick={evt => deleteContact(evt)}
            aria-label="delete contact"
          >
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </ContactsList>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filteredContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
