import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import ContactsReducer from '../src/modules/Contacts/ContactsReducer';
import ModalReducer from '../src/modules/Modal/ModalReducer';
import CallsHistoryReducer from '../src/modules/CallsHistory/CallsHistoryReducer';

export default combineReducers({
  contacts: ContactsReducer,
  calls: CallsHistoryReducer,
  modal: ModalReducer,
  form: formReducer,
  routing: routerReducer,
});
