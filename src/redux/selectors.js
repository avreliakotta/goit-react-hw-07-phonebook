// import { createSelector } from '@reduxjs/toolkit';

export const contactsSelector = state => state.contacts.contacts || [];

// export const contactsSelector = createSelector(
//   [selectContacts],
//   contacts => contacts
// );

export const filterSelector = state => state.filter.filter;
