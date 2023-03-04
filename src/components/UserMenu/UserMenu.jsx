import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectUserName } from 'redux/auth/auth-selectors';
import { Title, SecUser, Span } from './UserMenu.styled';
import { FormButton, ButtonSpan } from 'components/Form/Form.styled';

import { Link } from 'components/HeaderNav/HeaderNav.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);

  return (
    <SecUser>
      <Title>
        Welcome, <Span>{user}</Span>
      </Title>
      <FormButton type="button" onClick={() => dispatch(logout())}>
        <ButtonSpan>Logout</ButtonSpan>
      </FormButton>
      <Link to="/">Home</Link>
    </SecUser>
  );
};

export default UserMenu;
