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
  window.state = state;
  switch (action.type) {
    case ADD_CALLS: {
      const { contacts, calls } = R.reduce(normalizeCalls, baseStructure, action.payload);
      return {
        ...state,
        contacts,
        calls,
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

export const getRelatedCallsHistory = (state, id) => {
  const transform = (total, item) => {
    const isMatched = R.or(R.equals(item.caller, id), R.equals(item.recipient, id));

    if (isMatched) {
      const caller = R.pick(['name', 'phone'], R.path([item.caller], state.contacts.byId));
      const recipient = R.pick(['name', 'phone'], R.path([item.recipient], state.contacts.byId));

      return total.concat({ ...item, caller, recipient });
    }

    return total;
  };

  return R.pipe(
    R.values,
    R.reduce(transform, []),
  )(state.calls.byId);
};

window.getRelatedCallsHistory = getRelatedCallsHistory;

export default EntitiesReducer;
