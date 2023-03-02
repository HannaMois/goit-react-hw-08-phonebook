import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Title404,
  ErrorTitle,
  SubTitle404,
  Styled404,
  NotFoundWrapper,
  Btn,
  Link,
} from './PageNotFound.styled';

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <NotFoundWrapper>
      <Styled404>
        <Title404>404</Title404>
        <SubTitle404>Error</SubTitle404>
      </Styled404>
      <ErrorTitle>Page not found</ErrorTitle>
      <Btn>
        <Link to={'/'}> Home Page </Link>
      </Btn>
    </NotFoundWrapper>
  );
};

export default PageNotFound;
