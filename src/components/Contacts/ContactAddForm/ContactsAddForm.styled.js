import styled from 'styled-components';
import { BsPlusSquare } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

export const Form = styled.form`
  position: relative;
  display: flex;
  width: 500px;
  padding: ${p => p.theme.space[5]}px;
  flex-direction: column;
  box-shadow: 0px 10px 17px -3px ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.radii.normal};
  margin-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.primary};
`;

export const OpenFormBtn = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.link};
  color: ${p => p.theme.colors.primary};
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const OpenFormIcon = styled(BsPlusSquare)`
  fill: ${p => p.theme.colors.primary};
  margin-right: ${p => p.theme.space[3]}px;
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

export const FormCloseBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

export const FormCloseIcon = styled(MdClose)`
  fill: ${p => p.theme.colors.white};
  transition: 250ms linear;

  &:hover,
  :focus {
    fill: ${p => p.theme.colors.red};
  }
`;
