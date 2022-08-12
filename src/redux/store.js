import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts-reducers';

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
