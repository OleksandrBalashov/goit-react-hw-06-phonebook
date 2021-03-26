import { configureStore } from '@reduxjs/toolkit';
import contactsReducers from './contacts/contacts-reducers';

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
