import {
  Wrapper,
  PhoneTitle,
  PhoneContacts,
  PhoneNoContacts,
} from './ContactsPage.styled';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectUserName } from 'redux/auth/auth-selectors';
import ProtectPage from 'protect/protectPage';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);

  useEffect(() => {
    if (user === null) return;
    dispatch(fetchContacts());
  }, [dispatch, user]);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong!!!!');
    }
  }, [error]);

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
      {loading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        theme="colored"
      />
    </Wrapper>
  );
};

const ContactPage = ProtectPage(ContactsPage, '/');

export default ContactPage;
