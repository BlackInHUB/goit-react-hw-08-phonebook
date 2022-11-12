import PropTypes from 'prop-types'
import { List } from "./ContactsList.styled";
import { ContactsListItem } from "./ContactsListItem";

export const ContactsList = ({ contacts, onDelete }) => {
    return (
        <List>
            {contacts.map(contact => <ContactsListItem key={contact.id} contact={contact} onDelete={onDelete} />)}
        </List>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}