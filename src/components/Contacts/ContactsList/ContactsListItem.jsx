import { ListItem, DeleteBtn, ListItemName, ListItemNumber, DeleteIcon } from "./ContactsList.styled";

export const ContactsListItem = ({ contact, onDelete }) => {
    return (
        <ListItem>
            <ListItemName>{contact.name}</ListItemName>
            <ListItemNumber>{contact.number}</ListItemNumber>
            <DeleteBtn onClick={() => onDelete(contact.id)}><DeleteIcon size="20"/></DeleteBtn>
        </ListItem>
    )
}