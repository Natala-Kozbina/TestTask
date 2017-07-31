import { ADD_MANY } from './CallsActions';
import { getContactById } from '../Contacts/ContactsReducer';

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
          [action.id]: action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export const getRelatedCallsHistory = (state) => {
  const { selectedId } = state.contacts;
  return (state.calls.data[selectedId] && state.calls.data[selectedId].map((call) => {
    const caller = getContactById(state, call.caller.id);
    const recipient = getContactById(state, call.recipient.id);

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

