import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import cookie from 'react-cookie';
import routes from './routes';
import reducers from './reducers/index';
import ReactGA from 'react-ga';
import { AUTH_USER } from './actions/types';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import stylesheets
//import './public/stylesheets/base.scss';

// Initialize Google Analytics
ReactGA.initialize('UA-000000-01');

function logPageView() {
  ReactGA.pageview(window.location.pathname);
}

// const createStoreWithMiddleware = composeWithDevTools (applyMiddleware(reduxThunk)(createStore) );
// const store = createStoreWithMiddleware(reducers);

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
));

const token = cookie.load('token');

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch({ type: AUTH_USER });
}

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
  </Provider>,
  app);
