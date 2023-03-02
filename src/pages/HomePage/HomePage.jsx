import imageBook from '../../images/phone13.png';
import imageRow from '../../images/row.png';
import { NavLink } from 'react-router-dom';
import { ContainerHome, Span } from './HomePage.styled';

const HomePage = () => {
  return (
    <ContainerHome>
      <h2>
        <Span>Greetings!</Span>
        <br />
        Go to your Phonebook
        <br />
        <NavLink to="login">
          <img src={imageBook} alt="book" width={100} />
        </NavLink>
        <br />
        or fill out the registration form !
        <br />
        <NavLink to="register">
          <img src={imageRow} alt="row" />
        </NavLink>
      </h2>
    </ContainerHome>
  );
};

export default HomePage;
