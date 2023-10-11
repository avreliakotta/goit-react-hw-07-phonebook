import { fetchContactsAll, removeContact } from '../services/contactsApi';

import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// } from './actions';

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());
//   try {
//     const contacts = await fetchContactsAll();
//     dispatch(fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(fetchContactsError());
//   }
// };

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await fetchContactsAll();
  return contacts;
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { dispatch }) => {
    await removeContact(contactId);

    dispatch(fetchContacts());
    return contactId;
  }
);
