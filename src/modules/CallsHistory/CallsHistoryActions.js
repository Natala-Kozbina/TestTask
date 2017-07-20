import callApi from '../../utils/apiCaller';
import { FAKE_CALLS } from '../../utils/fakeApiResponses';

export const ADD_MANY = 'CALLS_HISTORY/ADD_MANY';

export const fetchCallsHistory = (id) => {
  return (dispatch) => {
    return callApi(`calls/${id}`, 'get', null, {
      fakeResponse: FAKE_CALLS,
      isFake: true,
    }).then(response => dispatch(addCalls({ response, id })));
  };
};

const addCalls = payload => ({
  type: ADD_MANY,
  payload: payload.response,
  id: payload.id,
});
