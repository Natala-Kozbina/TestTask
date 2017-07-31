import { ADD_MANY } from './CallsActions';
import { getContactById, getSelectedContactId } from '../Contacts/ContactsReducer';

const initialState = {
  data: {},
};

const CallsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MANY: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: action.payload.reduce((data, call) => ({ ...data, [call.id]: call }), state.data[action.id]),
        },
      };
    }

    default: {
      return state;
    }
  }
};

export const getRelatedCallsHistory = (state) => {
  const selectedId = getSelectedContactId(state);
  const isNotEmpty = state.calls.data[selectedId];
  const calls = isNotEmpty && Object.keys(state.calls.data[selectedId])
      .map(key => state.calls.data[selectedId][key]);

  return (calls && calls.map((call) => {
    const caller = getContactById(state, call.caller.id) || call.caller;
    const recipient = getContactById(state, call.recipient.id) || call.recipient;

    return {
      id: call.id,
      started: call.started,
      finished: call.finished,
      recipient: {
        name: recipient.name,
        phone: recipient.phone,
      },
      caller: {
        name: caller.name,
        phone: caller.phone,
      },
    };
  })) || [];
};

export default CallsReducer;

