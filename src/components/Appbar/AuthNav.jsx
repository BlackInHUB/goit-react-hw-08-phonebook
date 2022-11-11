import { Box } from "utils/Box";
import { NavMenuItem } from "./Appbar.styled";

export const AuthNav = () => {
    return (
        <Box display="flex">
            <NavMenuItem className="register" to="/register">Реєстрація</NavMenuItem>
            <NavMenuItem to="/login">Вхід</NavMenuItem>
        </Box>
    )
}