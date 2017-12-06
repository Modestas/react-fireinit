import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(
    <Router>
      <App store={store}/>
    </Router>,
    rootElement
  );
}
