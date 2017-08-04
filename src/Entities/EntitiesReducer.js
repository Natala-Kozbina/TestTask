import R from 'ramda';
import { ADD_CONTACTS, ADD_ONE_CONTACT, ADD_CALLS, REMOVE_CONTACT, UPDATE_CONTACT } from './EntitiesActions';

window.R = R;
const initialState = {
  contacts: {
    byId: {},
    ids: [],
  },
  calls: {
    byId: {},
    ids: [],
  },
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

function normalizeContacts(total, c) {
  return {
    byId: {
      ...total.byId,
      [c.id]: { ...c, loaded: true },
    },
    ids: total.ids.concat(c.id),
  };
}

const EntitiesReducer = (state = initialState, action) => {
  window.state = state;
  switch (action.type) {
    case ADD_CALLS: {
      const { contacts, calls } = R.reduce(normalizeCalls, baseStructure, action.payload);
      return {
        ...state,
        contacts: {
          byId: {
            ...state.contacts.byId,
            ...contacts.byId,
          },
          ids: R.uniq([...state.contacts.ids, ...contacts.ids]),
        },
        calls: {
          byId: {
            ...state.calls.byId,
            ...calls.byId,
          },
          ids: R.uniq([...state.calls.ids, ...calls.ids]),
        },
      };
    }

    case ADD_CONTACTS: {
      const contacts = R.reduce(normalizeContacts, { byId: {}, ids: [] }, action.payload);
      return {
        ...state,
        contacts: {
          byId: {
            ...state.contacts.byId,
            ...contacts.byId,
          },
          ids: R.uniq([...state.contacts.ids, ...contacts.ids]),
        },
      };
    }

    case ADD_ONE_CONTACT: {
      const { id } = action.payload;
      return {
        ...state,
        contacts: {
          byId: {
            ...state.contacts.byId,
            [id]: action.payload,
          },
          ids: state.contacts.ids.concat(id),
        },
      };
    }

    case UPDATE_CONTACT: {
      const { id } = action.payload;
      return {
        ...state,
        contacts: {
          byId: {
            ...state.contacts.byId,
            [id]: action.payload,
          },
        },
      };
    }

    case REMOVE_CONTACT: {
      const id = action.payload;
      return {
        ...state,
        contacts: {
          ...state.contacts,
          [id]: { ...state.contacts[id], deleted: true },
        },
      };
    }

    default: {
      return state;
    }
  }
};

export const getCallsByContactId = (state, id) => {
  const transform = (total, item) => {
    const isMatched = R.or(R.equals(item.caller, id), R.equals(item.recipient, id));

    if (isMatched) {
      const caller = R.pick(['name', 'phone'], R.path([item.caller], state.entities.contacts.byId));
      const recipient = R.pick(['name', 'phone'], R.path([item.recipient], state.entities.contacts.byId));

      return total.concat({ ...item, caller, recipient });
    }

    return total;
  };

  return R.pipe(
    R.values,
    R.reduce(transform, []),
  )(state.entities.calls.byId);
};

export const getContacts = state => R.filter(item => item.loaded && !item.deleted, R.values(state.entities.contacts.byId));
export const getContactById = (state, id) => R.pick([id], state.entities.contacts.byId);

export default EntitiesReducer;
