import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducers from './contacts/contacts-reducers';
import persistConfig from './contacts/persist-config';

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducers),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

const STORE = { store, persistor };

export default STORE;
