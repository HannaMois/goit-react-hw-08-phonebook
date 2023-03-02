import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { login } from 'redux/auth/auth-operations';
import { selectIsLoading, selectUserName } from 'redux/auth/auth-selectors';
import {
  LabelContainer,
  TitleLogin,
  Forms,
  FormLabel,
  FormInputEmail,
  FormInputPassword,
  FormButton,
  ButtonSpan,
} from './LoginPage.styled';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUserName);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user !== null) navigate('/contacts');
  }, [user, navigate]);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      email,
      password,
    };

    dispatch(login(formData));
    setEmail('');
    setPassword('');
  };

  return (
    <LabelContainer>
      <TitleLogin>Login</TitleLogin>
      {isLoading && <Loader />}
      <Forms onSubmit={handleSubmit}>
        <FormLabel>
          Email:
          <FormInputEmail
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
        </FormLabel>
        <FormLabel>
          Password:
          <FormInputPassword
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />
        </FormLabel>
        <FormButton disabled={isLoading} type="submit">
          <ButtonSpan>Enter</ButtonSpan>
        </FormButton>
      </Forms>
    </LabelContainer>
  );
}

export default LoginPage;
