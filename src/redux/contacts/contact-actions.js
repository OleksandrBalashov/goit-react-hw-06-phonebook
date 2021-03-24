import typesAction from './contact-types';
import shortid from 'shortid';

export const addContact = payload => ({
  type: typesAction.ADD_CONTACT,
  payload: {
    ...payload,
    id: shortid.generate(),
  },
});

export const deleteContact = id => ({
  type: typesAction.DELETE_CONTACT,
  payload: id,
});

export const filterContacts = name => ({
  type: typesAction.FILTER_CONTACTS,
  payload: name,
});
