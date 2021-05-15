import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export interface Payload {
  name: string;
  number: string;
}

export const addContact = createAction('contact/Add', (payload: Payload)=> ({
  payload: {
    ...payload,
    id: shortid.generate(),
  },
}));

export const deleteContact = createAction<string | undefined>('contact/Delete');
export const filterContacts = createAction<string | undefined>('contact/Filter');
