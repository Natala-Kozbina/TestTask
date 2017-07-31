import omit from 'object.omit';
import { ADD_MANY, ADD_ONE, SELECT, REMOVE, UPDATE } from './ContactsActions';

const initialState = {
  data: [],
  selectedId: null,
};

const ContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MANY: {
      return {
        ...state,
        data: action.payload.reduce((data, contact) => ({ ...data, [contact.id]: contact }), state.data),
      };
    }

    case ADD_ONE: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    }

    case SELECT: {
      return {
        ...state,
        selectedId: action.payload,
      };
    }

    case UPDATE: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    }

    case REMOVE: {
      return {
        ...state,
        data: omit(state.data, action.payload),
        selectedId: null,
      };
    }

    default: {
      return state;
    }
  }
};

export const getContacts = state => Object.keys(state.contacts.data).map(key => state.contacts.data[key]);
export const getSelectedContactId = state => state.contacts.selectedId;
export const getContactById = (state, id) => state.contacts.data[id];
export const getSelectedContact = state => state.contacts.data[state.contacts.selectedId];

export default ContactsReducer;
