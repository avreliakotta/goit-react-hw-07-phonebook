import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contact/initialState';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    deleteContact: (state, { type, payload }) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    },
    addContact: (state, { type, payload }) => {
      return {
        ...state,
        contacts: state.contacts
          ? [...state.contacts, { ...payload, id: nanoid() }]
          : [{ ...payload, id: nanoid() }],
      };
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
