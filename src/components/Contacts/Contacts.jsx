import PropTypes from 'prop-types';

import {
  ContactsList,
  ListItem,
  ContactName,
  ContactPhone,
  DeleteButton,
} from './Contacts.styled';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, id, number }) => (
        <ListItem key={id} id={id}>
          <ContactName>{name} </ContactName>
          <ContactPhone>{number}</ContactPhone>

          <DeleteButton onClick={deleteContact} aria-label="delete contact">
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
