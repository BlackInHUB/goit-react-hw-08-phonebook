import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/authOperation";
import { selectUser } from "redux/auth/authSelectors";
import { Box } from "utils/Box";
import { LogoutBtn, LogoutIcon, NavMenuItem, ContactsIcon, ContactsText, LogoutText, User } from "./Appbar.styled";
import {FaUserAstronaut} from 'react-icons/fa'

export const UserNav = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    const onLogout = () => {
        const action = logout();
        dispatch(action)
    }

    return (
        <Box display="flex" width="90%" justifyContent="space-between">
            <NavMenuItem className="contacts" to="/contacts"><ContactsIcon size="40"/><ContactsText>My contacts</ContactsText></NavMenuItem>
            <Box display="flex" alignItems="center">
                <Box >
                    <User>Hi, <FaUserAstronaut /> {user.name}!</User>
                </Box>
                <LogoutBtn onClick={onLogout}><LogoutText>Log out</LogoutText><LogoutIcon size="30" /></LogoutBtn>
            </Box>
        </Box>
    )
}