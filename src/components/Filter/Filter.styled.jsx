import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterText = styled.p`
  margin-top: ${props => props.theme.space.xs};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.m};
  color: ${props => props.theme.colors.mainColorText};
`;
export const FilterInput = styled.input`
  padding: ${props => props.theme.space.s};
  border: ${props => props.theme.borderWidths.w} solid
    ${props => props.theme.colors.secondColor};
  border-radius: ${props => props.theme.radii.radius};
  outline: none;
`;
