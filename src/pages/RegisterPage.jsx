import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/authOperation";
import { Box } from "utils/Box";

const RegisterPage = () => {
    const dispatch = useDispatch()

    const handleSubmit = (user) => {
        const action = signup(user)
        dispatch(action)
    }

    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <h1>Зареєструйтесь:</h1>
            <RegisterForm onSubmit={handleSubmit} />
        </Box>
    )
}

export default RegisterPage;