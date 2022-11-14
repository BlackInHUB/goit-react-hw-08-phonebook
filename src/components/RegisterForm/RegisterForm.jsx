import PropTypes from 'prop-types'
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
            <FormLabel htmlFor={nameId}>Name:</FormLabel>
                <FormInput id={nameId} value={name} name="name" type="text" onChange={handleChange} placeholder="Enter your name" required/>
            <FormLabel htmlFor={emailId}>Email:</FormLabel>
                <FormInput id={emailId} value={email} name="email" type="email" onChange={handleChange} placeholder="Enter your email" required />
            <FormLabel htmlFor={passwordId}>Password:</FormLabel>
                <FormInput id={passwordId} value={password} name="password" type="text" onChange={handleChange} placeholder="Enter your password" required />
            <SubmitBtn>Register</SubmitBtn>
        </Form>
    )
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}