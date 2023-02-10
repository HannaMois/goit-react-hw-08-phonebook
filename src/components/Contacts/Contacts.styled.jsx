import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: ${props => props.theme.space.xs};
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.theme.sizes.l};
    padding: ${props => props.theme.space.m};
    border: ${props => props.theme.borderWidths.w} solid ${props =>
  props.theme.colors.secondColor};
    border-radius: ${props => props.theme.radii.radius};
    background-color: ${props => props.theme.colors.bgColorMain};

   &:not(:last-child) {
    margin-bottom:  ${props => props.theme.space.m};
`;

export const ContactName = styled.span`
  font-weight: ${props => props.theme.fontWeights.m};
`;

export const ContactPhone = styled.span`
  margin-left: auto;
  font-weight: ${props => props.theme.fontWeights.s};
  color: ${props => props.theme.colors.secondColor};
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  border: ${props => props.theme.borderWidths.w} solid
    ${props => props.theme.colors.bgColorMain};
  border-radius: ${props => props.theme.radii.radius};
  /* background-color: ${props => props.theme.colors.secondColor}; */

  &:hover,
  &:focus {
    /* background-color: ${props => props.theme.colors.bgColorMain}; */
    background-color: ${props => props.theme.colors.secondColor};
  }
`;
