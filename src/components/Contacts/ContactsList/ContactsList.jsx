import { List } from "./ContactsList.styled";
import { ContactsListItem } from "./ContactsListItem";

export const ContactsList = ({ contacts, onDelete }) => {
    return (
        <List>
            {contacts.map(contact => <ContactsListItem key={contact.id} contact={contact} onDelete={onDelete} />)}
        </List>
    )
}