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
        data: action.payload,
      };
    }

    case ADD_ONE: {
      return {
        ...state,
        data: state.data.concat(action.payload),
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
        data: state.data.map(c => (c.id === action.payload.id ? action.payload : c)),
      };
    }

    case REMOVE: {
      return {
        ...state,
        data: state.data.filter(c => c.id !== action.payload),
        selectedId: null,
      };
    }

    default: {
      return state;
    }
  }
};

export const getContacts = state => state.contacts.data;
export const getSelectedContactId = state => state.contacts.selectedId;
export const getContactById = (state, id) => state.contacts.data.filter(c => c.id === id)[0];
export const getSelectedContact = state => state.contacts.data.filter(c => c.id === state.contacts.selectedId)[0];

export default ContactsReducer;
