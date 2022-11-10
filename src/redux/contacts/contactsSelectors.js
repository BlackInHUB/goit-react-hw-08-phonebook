export const selectContacts = ({ contacts }) => contacts.items;

export const selectIsLoading = ({ contacts }) => contacts.loading;

export const selectFilteredContacts = ({ filter, contacts }) => {
  if (!filter.value) {
    return contacts.items;
  }

  const normalizedFilter = filter.value.toLowerCase();
  const filteredContacts = contacts.items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );

  return filteredContacts;
};
