import { ListItem, DeleteBtn, ListItemName, ListItemNumber } from "./ContactsList.styled";

export const ContactsListItem = ({ contact, onDelete }) => {
    return (
        <ListItem>
            <ListItemName>{contact.name}</ListItemName>
            <ListItemNumber>{contact.number}</ListItemNumber>
            <DeleteBtn onClick={() => onDelete(contact.id)}>Видалити</DeleteBtn>
        </ListItem>
    )
}