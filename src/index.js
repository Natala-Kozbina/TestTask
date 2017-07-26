import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configure-store';
import DevTools from './dev-tools';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const mountApp = document.getElementById('root');

render(
  <Provider store={store}>
    <div>
      <MuiThemeProvider>
        <Router history={history}>
          {routes}
        </Router>
      </MuiThemeProvider>
      <DevTools />
    </div>
  </Provider>,
  mountApp
);
