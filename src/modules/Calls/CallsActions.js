import { push } from 'react-router-redux';
import callApi from '../../utils/apiCaller';

export const ADD_MANY = 'CALLS/ADD_MANY';

export const fetchCallsHistory = (id) => {
  return (dispatch) => {
    return callApi(`calls/${id}`, 'get')
      .then((response) => {
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
