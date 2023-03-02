import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectUserName } from 'redux/auth/auth-selectors';
import { Title, SecUser, Span, Button, ButtonSpan } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);

  return (
    <SecUser>
      <Title>
        Welcome, <Span>{user}</Span>
      </Title>
      <Button type="button" onClick={() => dispatch(logout())}>
        <ButtonSpan>Logout</ButtonSpan>
      </Button>
    </SecUser>
  );
};

export default UserMenu;
