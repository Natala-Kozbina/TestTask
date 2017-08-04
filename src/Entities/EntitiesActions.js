import { push } from 'react-router-redux';

export const ADD_CONTACTS = 'CONTACTS/ADD_MANY';
export const ADD_ONE_CONTACT = 'CONTACTS/ADD_ONE_CONTACT';
export const REMOVE_CONTACT = 'CONTACTS/REMOVE_CONTACT';
export const UPDATE_CONTACT = 'CONTACTS/UPDATE_CONTACT';
export const ADD_CALLS = 'CALLS/ADD_MANY';

const addContacts = payload => ({
  type: ADD_CONTACTS,
  payload,
});

const addContact = payload => ({
  type: ADD_ONE_CONTACT,
  payload,
});

const updateContact = payload => ({
  type: UPDATE_CONTACT,
  payload,
});

export const removeContact = payload => ({
  type: REMOVE_CONTACT,
  payload,
});

const addCalls = payload => ({
  type: ADD_CALLS,
  payload,
});

export const fetchContacts = () => {
  return (dispatch, state, api) => {
    return api('contacts', 'get')
      .then(response => dispatch(addContacts(response)))
      .catch(() => dispatch(push('/error')));
  };
};

export const createContact = (payload) => {
  return (dispatch, state, api) => {
    return api('contacts', 'post', payload)
      .then(response => dispatch(addContact(response)))
      .catch(() => dispatch(push('/error')));
  };
};

export const editContact = (payload) => {
  return (dispatch, state, api) => {
    return api(`contacts/${payload.id}`, 'put', payload)
      .then(response => dispatch(updateContact(response)))
      .catch(() => dispatch(push('/error')));
  };
};

export const deleteContact = (id) => {
  return (dispatch, state, api) => {
    return api(`contacts/${id}`, 'delete')
      .then(response => dispatch(removeContact(response.id)))
      .catch(() => dispatch(push('/error')));
  };
};

export const fetchCallsHistory = (id) => {
  return (dispatch, state, api) => {
    return api(`calls/${id}`, 'get')
      .then(response => dispatch(addCalls(response)))
      .catch(() => dispatch(push('/error')));
  };
};
