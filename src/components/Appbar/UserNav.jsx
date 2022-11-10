import { useDispatch } from "react-redux";
import { logout } from "redux/auth/authOperation";
import { Box } from "utils/Box";
import { LogoutBtn, LogoutIcon, NavMenuItem } from "./Appbar.styled";

export const UserNav = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        const action = logout();
        dispatch(action)
    }

    return (
        <Box display="flex" alignItems="center">
            <NavMenuItem to="/contacts">Книга контактів</NavMenuItem>
            <LogoutBtn onClick={onLogout}><LogoutIcon size="40" /></LogoutBtn>
        </Box>
    )
}