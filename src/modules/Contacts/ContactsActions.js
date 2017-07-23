import uuidV4 from 'uuid/v4';
import { push } from 'react-router-redux';
import callApi from '../../utils/apiCaller';
import { FAKE_CONTACTS } from '../../utils/fakeApiResponses';

export const ADD_MANY = 'CONTACTS/ADD_MANY';
export const ADD_ONE = 'CONTACTS/ADD_ONE';
export const SELECT = 'CONTACTS/SELECT';
export const REMOVE = 'CONTACTS/REMOVE';
export const UPDATE = 'CONTACTS/UPDATE';

const isFake = true;

export const fetchContacts = () => {
  return (dispatch) => {
    return callApi('contacts', 'get', null, {
      fakeResponse: FAKE_CONTACTS,
      isFake,
    }).then((response) => {
      if (!response.length) {
        return dispatch(push('/error'));
      }
      return dispatch(addContacts(response));
    });
  };
};

export const createContact = (payload) => {
  return (dispatch) => {
    return callApi('contacts', 'post', payload, {
      fakeResponse: { ...payload, id: uuidV4(), phone: Number(payload.phone), age: Number(payload.age) },
      isFake,
      isJSON: true,
    }).then((response) => {
      if (!response.id) {
        return dispatch(push('/error'));
      }
      return dispatch(addContact(response));
    });
  };
};

export const editContact = (payload) => {
  return (dispatch) => {
    return callApi(`contacts/${payload.id}`, 'put', payload, {
      fakeResponse: { ...payload, phone: Number(payload.phone), age: Number(payload.age) },
      isFake,
      isJSON: true,
    }).then((response) => {
      if (!response.id) {
        return dispatch(push('/error'));
      }
      return dispatch(updateContact(response));
    });
  };
};

export const deleteContact = (id) => {
  return (dispatch) => {
    return callApi(`contacts/${id}`, 'delete', null, {
      fakeResponse: { id },
      isFake,
      isJSON: false,
    }).then((response) => {
      if (!response.id) {
        return dispatch(push('/error'));
      }
      return dispatch(removeContact(response.id));
    });
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
