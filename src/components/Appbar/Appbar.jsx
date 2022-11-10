import { Box } from "utils/Box";
import { AuthNav } from "./AuthNav";
import { UserNav } from "./UserNav";
import useAuth from "hooks/useAuth";
import { NavMenuItem } from "./Appbar.styled";

export const Appbar = () => {
    const { isLogin } = useAuth();

    return (
        <Box as="nav" display="flex" justifyContent="space-between" alignItems="center">
            <NavMenuItem to="/">Logo</NavMenuItem>
            {isLogin ? <UserNav /> : <AuthNav />}
        </Box>
    )
}