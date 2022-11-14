import { Box } from "utils/Box";
import { NavMenuItem } from "./Appbar.styled";

export const AuthNav = () => {
    return (
        <Box display="flex">
            <NavMenuItem className="register" to="/register">Register</NavMenuItem>
            <NavMenuItem to="/login">Log in</NavMenuItem>
        </Box>
    )
}