import { combineReducers } from 'redux';
import { paginatorReducer } from 'react-redux-paginator';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import ContactsReducer from './modules/Contacts/ContactsReducer';
import CallsReducer from '../src/modules/Calls/CallsReducer';
import EntitiesReducer from '../src/Entities/EntitiesReducer';

export default combineReducers({
  contacts: ContactsReducer,
  calls: CallsReducer,
  paginator: paginatorReducer,
  form: formReducer,
  entities: EntitiesReducer,
  routing: routerReducer,
});
