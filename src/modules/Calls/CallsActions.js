import { push } from 'react-router-redux';

export const ADD_MANY = 'CALLS/ADD_MANY';

const addCalls = payload => ({
  type: ADD_MANY,
  payload: payload.response,
  id: payload.id,
});

export const fetchCallsHistory = (id) => {
  return (dispatch, state, api) => {
    return api(`calls/${id}`, 'get')
      .then(response => dispatch(addCalls({ response, id })))
      .catch(() => dispatch(push('/error')));
  };
};

