import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import HeaderNav from './HeaderNav/HeaderNav';
import UserMenu from './UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <header>{isLoggedIn ? <UserMenu /> : <HeaderNav />}</header>;
};
export default AppBar;
