import useForm from "hooks/useForm";
import PropTypes from 'prop-types'
import { nanoid } from "nanoid";
import { useMemo } from "react";
import { Form, FormLabel, FormInput, SubmitBtn } from "../LoginForm/LoginForm.styled";

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
            <FormLabel htmlFor={emailId}>Email:</FormLabel>
                <FormInput id={emailId} value={email} name="email" type="email" onChange={handleChange} placeholder="Enter your email" required />
            <FormLabel htmlFor={passwordId}>Password:</FormLabel>
                <FormInput id={passwordId} value={password} name="password" type="password" onChange={handleChange} placeholder="Enter your password" required />
            <SubmitBtn>Log in</SubmitBtn>
        </Form>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}