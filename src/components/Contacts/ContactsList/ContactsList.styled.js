import styled from 'styled-components';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const List = styled.ul`
  padding: ${p => p.theme.space[5]}px;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const ListItemName = styled.span``;

export const ListItemNumber = styled.span``;

export const DeleteBtn = styled.button`
  width: fit-content;
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const DeleteIcon = styled(RiDeleteBin2Line)`
  transition: 250ms linear;

  &:hover,
  :focus {
    fill: ${p => p.theme.colors.red};
  }
`;
