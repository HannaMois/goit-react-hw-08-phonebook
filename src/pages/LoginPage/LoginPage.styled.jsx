import styled from '@emotion/styled';

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleLogin = styled.h1`
  color: ${props => props.theme.colors.mainColorText};
  font-size: ${props => props.theme.fontSizes.m};

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;
