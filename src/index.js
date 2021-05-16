import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {ServiceProvider} from "./components/bookstore-service-context";
import BookstoreService from "./services/bookstore-service";
import ErrorBoundry from "./components/error-boundry";

import store from "./store";

import App from './components/app';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <ServiceProvider value={bookstoreService}>
          <App />
        </ServiceProvider>
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

