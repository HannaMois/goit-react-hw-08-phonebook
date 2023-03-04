import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/auth-operations';
import { selectUserName } from 'redux/auth/auth-selectors';
import {
  Forms,
  FormLabel,
  FormButton,
  FormInput,
  ButtonSpan,
} from 'components/Form/Form.styled';
import { RegContainer, TitleReg } from './RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUserName);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user !== null) navigate('/contacts');
  }, [user, navigate]);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      name,
      email,
      password,
    };

    dispatch(register(formData));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegContainer>
      <TitleReg>Registration</TitleReg>

      <Forms onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            autoComplete="off"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            minLength={3}
            maxLength={10}
          />
        </FormLabel>

        <FormLabel>
          E-mail
          <FormInput
            autoComplete="off"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </FormLabel>

        <FormLabel>
          Password
          <FormInput
            autoComplete="off"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={7}
            maxLength={30}
          />
        </FormLabel>

        <FormButton type="submit">
          <ButtonSpan>Registration</ButtonSpan>
        </FormButton>
      </Forms>
    </RegContainer>
  );
};

export default RegisterPage;
