import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export const NavMenuItem = styled(NavLink)``;

export const LogoutBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const LogoutIcon = styled(RiLogoutBoxRLine)`
  vertical-align: middle;
`;
