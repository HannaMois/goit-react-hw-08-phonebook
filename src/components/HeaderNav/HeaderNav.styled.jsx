import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.section`
  display: block;
  padding: 20px 0;
  margin: 0 auto;
  border-bottom: 2px solid grey;
  width: 100%;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 5px;
  text-transform: uppercase;
  font-size: 25px;
  color: ${props => props.theme.colors.mainColorText};
  text-align: center;
  font-weight: bold;

  @media screen and (min-width: 480px) {
    padding: 10px;
  }

  &:hover,
  &:focus {
    color: white;
  }

  &.active {
    text-decoration: overline;
    text-shadow: #fc0 1px 0 10px;
    color: white;
  }
`;
