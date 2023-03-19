import styled from '@emotion/styled';

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.space.m};
  border: ${props => props.theme.borderWidths.w} solid
    ${props => props.theme.colors.secondColor};
  border-radius: ${props => props.theme.radii.radius};
  background-color: ${props => props.theme.colors.bgColorMain};

  @media screen and (min-width: 768px) {
    width: ${props => props.theme.sizes.l};
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.b};
  color: ${props => props.theme.colors.mainColorText};
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.xs};
  padding: ${props => props.theme.space.m};
  margin-top: ${props => props.theme.space.l};
  margin-bottom: ${props => props.theme.space.l};
  border-radius: ${props => props.theme.radii.radius};
  border: ${props => props.theme.borderWidths.w} solid
    ${props => props.theme.colors.secondColor};
  outline: none;

  @media screen and (min-width: 480px) {
    width: ${props => props.theme.sizes.m};
  }
`;

export const FormButton = styled.button`
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
