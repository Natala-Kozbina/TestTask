import R from 'ramda';
import { ADD_CONTACTS, ADD_ONE_CONTACT, ADD_CALLS, REMOVE_CONTACT, UPDATE_CONTACT } from './EntitiesActions';

window.R = R;
const initialState = {
  contacts: {},
  calls: {},
};

const baseStructure = {
  contacts: {
    byId: {},
    ids: [],
  },
  calls: {
    byId: {},
    ids: [],
  },
};

function normalizeCalls(total, c) {
  return {
    contacts: {
      ...total.contacts,
      byId: {
        ...total.contacts.byId,
        [c.caller.id]: { ...c.caller, loaded: false },
        [c.recipient.id]: { ...c.recipient, loaded: false },
      },
      ids: R.uniq(total.contacts.ids.concat(c.caller.id, c.recipient.id)),
    },
    calls: {
      ...total.calls,
      byId: {
        ...total.calls.byId,
        [c.id]: {
          ...c,
          caller: c.caller.id,
          recipient: c.recipient.id,
        },
      },
      ids: total.calls.ids.concat(c.id),
    },
  };
}

const EntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CALLS: {
      const { contacts, calls } = R.reduce(normalizeCalls, baseStructure, action.payload);
      return {
        ...state,
        contacts,
        calls,
        contactCalls: {
          [action.id]: {
            ...R.map((item) => { return { ...item, caller: item.caller.id, recipient: item.recipient.id }; }, action.payload),
          },
        },
      };
    }

    case ADD_CONTACTS: {
      // const { contacts } = R.reduce(normalizeContacts, baseStructure, action.payload);
      return {
        ...state,
        // contacts,
      };
    }

    case ADD_ONE_CONTACT: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    }

    case UPDATE_CONTACT: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    }

    case REMOVE_CONTACT: {
      return {
        ...state,
        data: R.omit(action.payload, state.data),
        selectedId: null,
      };
    }

    default: {
      return state;
    }
  }
};
// //
// export const getRelatedCallsHistory = (state) => {
//     const selectedContactId = '2';
//     const related = state.calls.reduce((total, r) => {
//       if (r.caller.id === selectedContactId) {
//         return total.concat({
//           ...r,
//           caller: r.caller,
//           reciepient:
//         })
//       }
//     },[])
//
//     return {
//       id: call.id,
//       started: call.started,
//       finished: call.finished,
//       recipient: {
//         name: recipient.name,
//         phone: recipient.phone,
//       },
//       caller: {
//         name: caller.name,
//         phone: caller.phone,
//       },
//     };
// };

export default EntitiesReducer;

