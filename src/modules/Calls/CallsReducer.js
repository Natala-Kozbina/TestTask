import { ADD_MANY } from './CallsActions';

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
  return state.calls.data[selectedId];
};

export default CallsReducer;
