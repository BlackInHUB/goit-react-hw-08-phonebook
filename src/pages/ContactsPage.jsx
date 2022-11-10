import { useEffect } from "react";
import { useDispatch } from "react-redux"
import {fetchContacts } from "redux/contacts/contactsOperations";

import { Contacts } from "components/Contacts/Contacts";
import { Box } from "utils/Box";

const ContactsPage = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
    const action = fetchContacts();
    dispatch(action)
    }, [dispatch])
    
    return (
        <Box>
            <Contacts />
        </Box>
    )
}

export default ContactsPage;