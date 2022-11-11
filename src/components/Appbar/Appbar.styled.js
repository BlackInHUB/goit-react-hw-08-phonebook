import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { TiContacts } from 'react-icons/ti';
import { GiSecretBook } from 'react-icons/gi';

export const NavMenuItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.link};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[2]}px;
  transition: 250ms linear;

  &:hover,
  :focus {
    transform: scale(1.1);
  }

  &.register {
    margin-right: ${p => p.theme.space[3]}px;
  }

  &.active {
    color: ${p => p.theme.colors.yellow};
  }

  &.logo {
    font-size: ${p => p.theme.fontSizes.navlink};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.primary};
  box-shadow: 1px 10px 10px -4px ${p => p.theme.colors.grey};
`;

export const LogoutBtn = styled.button`
  font-family: inherit;
  background-color: transparent;
  margin: 0;
  border: none;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.link};
  font-weight: ${p => p.theme.fontWeights.bold};
  cursor: pointer;
  padding: ${p => p.theme.space[3]}px;
  transition: 250ms linear;

  &:hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const LogoIcon = styled(GiSecretBook)`
  vertical-align: middle;
  color: inherit;
`;

export const LogoutIcon = styled(RiLogoutBoxRLine)`
  vertical-align: middle;
  color: inherit;
`;

export const ContactsIcon = styled(TiContacts)`
  vertical-align: middle;
  transition: transform 250ms linear;
  color: inherit;
  transform: translateX(-4px);
`;

export const ContactsText = styled.span``;

export const LogoutText = styled.span`
  margin-right: ${p => p.theme.space[3]}px;
`;

export const User = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.link};
  margin-right: ${p => p.theme.space[4]}px;
`;
