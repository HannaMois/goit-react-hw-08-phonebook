import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from './AppBar';
import { Loader } from './Loader/Loader';
import { selectError } from 'redux/contacts/selectors';
import { selectRefreshed } from 'redux/auth/auth-selectors';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { Container } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

const App = () => {
  const isRefreshing = useSelector(selectRefreshed);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong!!!!');
    }
  }, [error]);

  return (
    <Container>
      <AppBar />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacts" element={<ContactPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      )}
      ;
    </Container>
  );
};

export default App;
