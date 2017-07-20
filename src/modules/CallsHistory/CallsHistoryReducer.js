import { ADD_MANY } from './CallsHistoryActions';

const initialState = {
  data: {},
  selectedId: null,
};

const CallsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MANY: {
      const { id, payload } = action;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: payload,
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
  return state.calls.data[selectedId] || [];
};

export default CallsReducer;
