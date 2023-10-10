// import { combineReducers, createReducer } from '@reduxjs/toolkit';
// import { fetchContacts } from './operations';
// // import {
// //   fetchContactsRequest,
// //   fetchContactsSuccess,
// //   fetchContactsError,
// // } from './actions';

// export const entities = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
// });
// export const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });
// export const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// });
// export const items = combineReducers({
//   entities: entities,
//   isLoading: isLoading,
//   error: error,
// });
