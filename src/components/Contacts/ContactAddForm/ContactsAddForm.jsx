import useForm from "hooks/useForm";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import { Form, FormInput, FormLabel, SubmitBtn } from "./ContactsAddForm.styled";

const initialState = {
    name: '',
    number: ''
}

export const ContactsAddForm = ({ onSubmit }) => {
    const { state, handleSubmit, handleChange } = useForm({initialState, onSubmit})
    const { name, number } = state;

    const nameId = useMemo(() => nanoid(), [])
    const numberId = useMemo(() => nanoid(), [])

    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel htmlFor={nameId}>Ім'я контакту:</FormLabel>
                <FormInput id={nameId} name="name" type="text" value={name} onChange={handleChange} placeholder="Введіть назву" required />
            <FormLabel htmlFor={numberId}>Номер телефону:</FormLabel>
                <FormInput id={numberId} name="number" type="text" value={number} onChange={handleChange} placeholder="Введіть ім'я" required />
            <SubmitBtn>Додати контакт</SubmitBtn>
        </Form>
    )
}