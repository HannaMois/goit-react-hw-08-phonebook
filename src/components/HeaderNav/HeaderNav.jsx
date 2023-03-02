import { NavWrapper, Link } from './HeaderNav.styled';

const HeaderNav = () => {
  return (
    <NavWrapper>
      <Link to="/">Home</Link>
      <Link to="register">SignUp</Link>
      <Link to="login">Login</Link>
    </NavWrapper>
  );
};

export default HeaderNav;
