import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 500px;
  padding: ${p => p.theme.space[5]}px;
  flex-direction: column;
  box-shadow: 0px 10px 17px -3px ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.radii.normal};
  margin-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.primary};
`;

export const FormLabel = styled.label`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
`;

export const FormInput = styled.input`
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  outline: none;
  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  transition: box-shadow 250ms linear;

  &:focus {
    box-shadow: 0px 10px 10px -5px ${p => p.theme.colors.black};
  }
`;

export const SubmitBtn = styled.button`
  width: fit-content;
  font-family: inherit;
  outline: none;
  margin: 0 auto;
  font-size: inherit;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  transition: 250ms linear;

  &:hover,
  :focus {
    color: ${p => p.theme.colors.primary};
    box-shadow: inset 6.5em 0 0 0 ${p => p.theme.colors.white};
  }

  &:active {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0px 10px 10px -5px ${p => p.theme.colors.black};
  }
`;
