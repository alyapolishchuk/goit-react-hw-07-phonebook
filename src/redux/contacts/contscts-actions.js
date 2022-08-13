import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from 'services/api';
//-------------------------------------------------------------//

export const getUsers = createAsyncThunk('contacts/get', async () => {
  return await getContacts();
});
export const addUser = createAsyncThunk('contacts/add', async contact => {
  const response = await postContact(contact);
  return response.data;
});

export const deleteUser = createAsyncThunk('contacts/delete', async id => {
  const response = await deleteContact(id);
  return response.data.id;
});

export const filterUser = createAction('contacts/filter');
