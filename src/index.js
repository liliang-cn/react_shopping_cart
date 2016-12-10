import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
import BooksCart from './containers/BooksCart';

import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <BooksCart />
  </Provider>,
  document.getElementById('root')
);
