import { ADD_MANY } from './CallsActions';
import { UPDATE as UPDATE_CONTACT } from '../Contacts/ContactsActions';

const initialState = {
  data: [],
};

const CallsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MANY: {
      const data = [];
      action.payload.forEach((c) => {
        if (!state.data.some(_c => _c.id === c.id)) {
          data.push(c);
        }
      });

      return {
        ...state,
        data,
      };
    }

    case UPDATE_CONTACT: {
      const { payload } = action;
      return {
        ...state,
        data: state.data.map((c) => {
          return {
            ...c,
            caller: c.caller.id === payload.id
              ? {
                ...c.caller,
                name: payload.name,
                phone: payload.phone,
              } : c.caller,
            recipient: c.recipient.id === payload.id
              ? {
                ...c.recipient,
                name: payload.name,
                phone: payload.phone,
              } : c.recipient,
          };
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export const getRelatedCallsHistory = (state) => {
  const { selectedId } = state.contacts;
  return state.calls.data.filter(c => c.caller && c.caller.id === selectedId) || [];
};

export default CallsReducer;
