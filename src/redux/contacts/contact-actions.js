import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/Add', payload => ({
  payload: {
    ...payload,
    id: shortid.generate(),
  },
}));

export const deleteContact = createAction('contact/Delete');
export const filterContacts = createAction('contact/Filter');
