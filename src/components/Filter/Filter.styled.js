import styled from 'styled-components';

export const FilterInput = styled.input`
  padding: ${p => p.theme.space[3]}px;
  outline: none;
  border: none;
  border-bottom: ${p => p.theme.borders.bold} ${p => p.theme.colors.secondary};
`;
