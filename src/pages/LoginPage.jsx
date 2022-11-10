import { LoginForm } from "components/LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperation";
import { Box } from "utils/Box";

const LoginPage = () => {
    const dispatch = useDispatch();

    const onLogin = (userData) => {
        const action = login(userData);
        dispatch(action)
    }

    return (
        <Box>
            <LoginForm onSubmit={onLogin}/>
        </Box>
    )
}

export default LoginPage;