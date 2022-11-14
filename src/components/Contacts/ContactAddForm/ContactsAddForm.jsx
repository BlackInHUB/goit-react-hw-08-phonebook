import useForm from "hooks/useForm";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import { Box } from "utils/Box";
import PropTypes from 'prop-types'
import { Form, FormInput, FormLabel, SubmitBtn, OpenFormBtn, OpenFormIcon, FormCloseBtn, FormCloseIcon } from "./ContactsAddForm.styled";

const initialState = {
    name: '',
    number: '',
    isFormOpen: false
}

export const ContactsAddForm = ({ onSubmit }) => {
    const { state, setState, handleSubmit, handleChange } = useForm({initialState, onSubmit})
    const { name, number, isFormOpen } = state;

    const nameId = useMemo(() => nanoid(), [])
    const numberId = useMemo(() => nanoid(), [])

    const formOpenToggle = () => {
        setState(prevState => {
            return {...prevState, isFormOpen: !prevState.isFormOpen}
        })
    }

    return (
        <Box>
            {!isFormOpen && <OpenFormBtn onClick={formOpenToggle}><OpenFormIcon size="30" />Add contact</OpenFormBtn>}
            {isFormOpen &&
                <Form onSubmit={handleSubmit}>
                    <FormCloseBtn onClick={formOpenToggle}><FormCloseIcon size="25"/></FormCloseBtn>
                    <FormLabel htmlFor={nameId}>Name:</FormLabel>
                        <FormInput id={nameId} name="name" type="text" value={name} onChange={handleChange} placeholder="Enter a name" required />
                    <FormLabel htmlFor={numberId}>Number:</FormLabel>
                        <FormInput id={numberId} name="number" type="text" value={number} onChange={handleChange} placeholder="Enter a number" required />
                    <SubmitBtn>Add</SubmitBtn>
                </Form>}
        </Box>
    )
}

ContactsAddForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}