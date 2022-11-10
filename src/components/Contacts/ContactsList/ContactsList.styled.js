import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ListItemName = styled.span``;

export const ListItemNumber = styled.span``;

export const DeleteBtn = styled.button`
  width: fit-content;
  border: none;
`;
