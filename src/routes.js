import React from 'react';
import { Route } from 'react-router';
import CreateEditContact from './modules/Contacts/CreateEditContact';
import App from './app';

export default (
  <Route path="/" component={App}>
    <Route path="/create" component={CreateEditContact} />
    <Route path="/edit/:contactId" component={CreateEditContact} />
  </Route>
);
