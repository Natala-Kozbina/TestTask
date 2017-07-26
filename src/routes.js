import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import CreateContact from './modules/Contacts/Form/CreateContact';
import EditContact from './modules/Contacts/Form/EditContact';
import Error from './Components/Error/Error';
import MainPage from './modules/App/MainPage';
import App from './app';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/main" />
    <Route path="/main" component={MainPage} >
      <Route path="/create" component={CreateContact} />
      <Route path="/edit/:contactId" component={EditContact} />
      <Route path="/error" component={Error} />
    </Route>
  </Route>
);
