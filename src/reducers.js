import { combineReducers } from 'redux';
import { paginatorReducer } from 'react-redux-paginator';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import ContactsReducer from './modules/Contacts/Contacts/ContactsReducer';
import CallsReducer from '../src/modules/Calls/CallsReducer';

export default combineReducers({
  contacts: ContactsReducer,
  calls: CallsReducer,
  paginator: paginatorReducer,
  form: formReducer,
  routing: routerReducer,
});
