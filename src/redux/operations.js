import { fetchContactsAll } from '../services/contactsApi';
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
