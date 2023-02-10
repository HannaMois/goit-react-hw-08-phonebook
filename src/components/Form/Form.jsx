import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Forms,
  FormLabel,
  FormInputName,
  FormInputTel,
  FormButton,
  ButtonSpan,
} from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
    isDisabled: false,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addContact(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ isDisabled: false, [name]: value });
    console.log(this.props.contacts);

    const contactFinder = this.props.contacts.find(
      contact =>
        contact.name.toLowerCase() === value.toLowerCase() ||
        contact.number === value
    );
    if (contactFinder) {
      this.setState({ isDisabled: true });
      alert(`${value} is already in contacts.`);
      this.setState({ [name]: '' });
    }
  };

  render() {
    return (
      <Forms onSubmit={this.handleSubmit}>
        <FormLabel>
          Name:
          <FormInputName
            type="text"
            name="name"
            placeholder="Rosie Simpson"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={evt => this.handleChange(evt)}
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
            value={this.state.number}
            onChange={evt => this.handleChange(evt)}
            required
          />
        </FormLabel>

        <FormButton type="submit" disabled={this.state.isDisabled}>
          <ButtonSpan>add contact</ButtonSpan>
        </FormButton>
      </Forms>
    );
  }
}

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Form;
