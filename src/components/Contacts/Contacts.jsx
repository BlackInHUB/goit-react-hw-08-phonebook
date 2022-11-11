import { Filter } from "components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "redux/contacts/contactsSelectors";
import { addContact, deleteContact } from "redux/contacts/contactsOperations";
import { Box } from "utils/Box";
import { ContactsAddForm } from "./ContactAddForm/ContactsAddForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { notifyWarning, notifySuccess } from "utils/notify";

export const Contacts = () => {
    const contacts = useSelector(selectFilteredContacts)
    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();
    
    const onDelete = (id) => {
        const action = deleteContact(id);
        dispatch(action);
    }

    const handleSubmit = (newContact) => {
        for (const contact of contacts) {
            if (contact.name === newContact.name) {
                return notifyWarning(contact.name)
            }
        }

        const action = addContact(newContact);
        dispatch(action)
        notifySuccess(newContact.name)
    }

    return (
        <Box width="500px" display="flex" flexDirection="column" alignItems="center">
            <ContactsAddForm onSubmit={handleSubmit} />
            <Filter />
            <ContactsList contacts={filteredContacts} onDelete={onDelete} />
        </Box>
    )
}