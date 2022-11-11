import useForm from "hooks/useForm";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import { Form, FormLabel, FormInput, SubmitBtn } from "./RegisterForm.styled";

const initialState = {
    name: '',
    email: '',
    password: '',
}

export const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit })
    const { name, email, password } = state;

    const nameId = useMemo(() => nanoid(), []);
    const emailId = useMemo(() => nanoid(), []);
    const passwordId = useMemo(() => nanoid(), []);
    
    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel htmlFor={nameId}>Ім'я:</FormLabel>
                <FormInput id={nameId} value={name} name="name" type="text" onChange={handleChange} placeholder="Введіть ім'я" required/>
            <FormLabel htmlFor={emailId}>Електронна адреса:</FormLabel>
                <FormInput id={emailId} value={email} name="email" type="email" onChange={handleChange} placeholder="Введіть електронну адресу" required />
            <FormLabel htmlFor={passwordId}>Пароль:</FormLabel>
                <FormInput id={passwordId} value={password} name="password" type="text" onChange={handleChange} placeholder="Введіть пароль" required />
            <SubmitBtn>Зареєструватись</SubmitBtn>
        </Form>
    )
}