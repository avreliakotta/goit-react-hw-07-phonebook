import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts.entities || [];

export const contactsSelector = createSelector(
  [selectContacts],
  contacts => contacts
);

export const filterSelector = state => state.filter.filter;
