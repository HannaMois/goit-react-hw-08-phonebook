import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Forms,
  FormLabel,
  FormInputName,
  FormInputTel,
  FormButton,
  ButtonSpan,
} from './Form.styled';

export default function Form({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContact({ name, number });
    reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'number') {
      setNumber(value);
      return;
    }
  };

  return (
    <Forms onSubmit={handleSubmit}>
      <FormLabel>
        Name:
        <FormInputName
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Number:
        <FormInputTel
          type="tel"
          name="number"
          placeholder="459-12-56"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </FormLabel>

      <FormButton type="submit">
        <ButtonSpan>add contact</ButtonSpan>
      </FormButton>
    </Forms>
  );
}

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
