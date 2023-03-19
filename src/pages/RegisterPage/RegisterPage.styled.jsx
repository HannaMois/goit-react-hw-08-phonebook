import styled from '@emotion/styled';

export const RegContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const TitleReg = styled.h1`
  color: ${props => props.theme.colors.mainColorText};
  font-size: ${props => props.theme.fontSizes.m};

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;
