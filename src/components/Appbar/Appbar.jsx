import { AuthNav } from "./AuthNav";
import { UserNav } from "./UserNav";
import useAuth from "hooks/useAuth";
import { NavMenuItem, Header, LogoIcon } from "./Appbar.styled";

export const Appbar = () => {
    const { isLogin } = useAuth();

    return (
        <Header>
            <NavMenuItem className="logo" to="/"><LogoIcon size="50" />Книга контактів</NavMenuItem>
            {isLogin ? <UserNav /> : <AuthNav />}
        </Header>
    )
}