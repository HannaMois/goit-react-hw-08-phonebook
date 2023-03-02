import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  text-transform: uppercase;
  font-size: 25px;
  color: red;
  text-align: center;
  font-weight: bold;

  &:hover,
  &:focus {
    color: white;
  }
`;

export const NotFoundWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Styled404 = styled.div`
  position: relative;
`;

export const Title404 = styled.h2`
  font-size: 60px;
  color: red;
  font-weight: 500;
  position: relative;
  z-index: 3;
`;

export const SubTitle404 = styled.span`
  color: gray;
  font-size: 70px;
  font-weight: 700;
  position: absolute;
  transform: translate(-25%, -15%);
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

export const ErrorTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: #fc0 1px 0 10px;
`;

export const Btn = styled.button`
  padding: 10px;
  font-weight: 300;
  color: white;
  background-color: #52acff;
  border: 1px solid transparent;
  outline: none;
  border-radius: 5px;
  transform: scale(1);
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
