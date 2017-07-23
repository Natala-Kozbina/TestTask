import { push } from 'react-router-redux';
import callApi from '../../utils/apiCaller';
import { FAKE_CALLS } from '../../utils/fakeApiResponses';

const isFake = true;

export const ADD_MANY = 'CALLS/ADD_MANY';

export const fetchCallsHistory = (id) => {
  return (dispatch) => {
    return callApi(`calls/${id}`, 'get', null, {
      fakeResponse: FAKE_CALLS.filter(c => c.caller.id === id),
      isFake,
      isJSON: false,
    }).then((response) => {
      if (!response.length) {
        return dispatch(push('/error'));
      }
      return dispatch(addCalls({ response, id }));
    });
  };
};

const addCalls = payload => ({
  type: ADD_MANY,
  payload: payload.response,
  id: payload.id,
});
