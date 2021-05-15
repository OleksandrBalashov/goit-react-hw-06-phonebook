import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, filterContacts } from './contact-actions';

type ContactType = {
  name: string;
  number: string
  id: string
}

const itemsReducer = createReducer<ContactType[]>([], {
  [addContact.type]: (state, { payload }) => {
    if (state.find(({ name }) => name === payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return;
    }

    return [...state, payload];
  },
  [deleteContact.type]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer<string>('', {
  [filterContacts.type]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
