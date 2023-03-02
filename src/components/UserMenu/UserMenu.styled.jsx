import styled from '@emotion/styled';

export const SecUser = styled.section`
  display: flex;
`;
export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 20px;
`;

export const Span = styled.span`
  font-size: 30px;
  color: white;
  text-shadow: #fc0 1px 0 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.space.s};
  font-weight: ${props => props.theme.fontWeights.l};
  color: ${props => props.theme.colors.whiteColor};
  background-color: ${props => props.theme.colors.secondColor};
  border: ${props => props.theme.borderWidths.w} solid transparent;
  outline: none;
  border-radius: ${props => props.theme.radii.radius};
  transform: scale(1);
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ButtonSpan = styled.span`
  padding: ${props => props.theme.space.s};
  font-size: ${props => props.theme.fontSizes.xs};
  text-transform: uppercase;
`;
