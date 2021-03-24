import { combineReducers } from 'redux';
import typesAction from './contact-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case typesAction.ADD_CONTACT:
      return [...state, payload];

    case typesAction.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case typesAction.FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
