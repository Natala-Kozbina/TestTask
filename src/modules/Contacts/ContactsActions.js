import uuidV4 from 'uuid/v4';
import callApi from '../../utils/apiCaller';
import { FAKE_CONTACTS } from '../../utils/fakeApiResponses';

export const ADD_MANY = 'CONTACTS/ADD_MANY';
export const ADD_ONE = 'CONTACTS/ADD_ONE';
export const SELECT = 'CONTACTS/SELECT';
export const REMOVE = 'CONTACTS/REMOVE';
export const UPDATE = 'CONTACTS/UPDATE';

export const fetchContacts = () => {
  return (dispatch) => {
    return callApi('contacts', 'get', null, {
      fakeResponse: FAKE_CONTACTS,
      isFake: true,
    }).then(response => dispatch(addContacts(response)));
  };
};

export const createContact = (payload) => {
  return (dispatch) => {
    return callApi('contacts', 'post', payload, {
      fakeResponse: { ...payload, id: uuidV4() },
      isFake: true,
    }).then(response => dispatch(addContact(response)));
  };
};

export const editContact = (payload) => {
  return (dispatch) => {
    return callApi('contacts', 'put', payload, {
      fakeResponse: payload,
      isFake: true,
    }).then(response => dispatch(updateContact(response)));
  };
};

export const deleteContact = (id) => {
  return (dispatch) => {
    return callApi('contacts', 'delete', id, {
      fakeResponse: id,
      isFake: true,
    }).then(response => dispatch(removeContact(response)));
  };
};

const addContacts = payload => ({
  type: ADD_MANY,
  payload,
});

const addContact = payload => ({
  type: ADD_ONE,
  payload,
});

const updateContact = payload => ({
  type: UPDATE,
  payload,
});

export const selectContact = payload => ({
  type: SELECT,
  payload,
});

export const removeContact = payload => ({
  type: REMOVE,
  payload,
});
