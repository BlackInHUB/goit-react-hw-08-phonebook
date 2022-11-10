import useForm from "hooks/useForm";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import { Form, FormLabel, FormInput, SubmitBtn } from "../RegisterForm/RegisterForm.styled";

const initialState = {
    email: '',
    password: '',
}

export const LoginForm = ({onSubmit}) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit })
    const { email, password } = state;

    const emailId = useMemo(() => nanoid(), []);
    const passwordId = useMemo(() => nanoid(), []);
    
    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel htmlFor={emailId}>Електронна адреса:</FormLabel>
                <FormInput id={emailId} value={email} name="email" type="email" onChange={handleChange} placeholder="Введіть електронну адресу" required />
            <FormLabel htmlFor={passwordId}>Пароль:</FormLabel>
                <FormInput id={passwordId} value={password} name="password" type="password" onChange={handleChange} placeholder="Введіть пароль" required />
            <SubmitBtn>Увійти</SubmitBtn>
        </Form>
    )
}