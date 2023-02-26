import {
  Wrapper,
  PhoneTitle,
  PhoneContacts,
  PhoneNoContacts,
} from './App.styled';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { Loader } from './Loader/Loader';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

export default App;
