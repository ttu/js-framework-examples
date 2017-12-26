import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import App from './App';
import './index.css';
import sensors from './reducers/Sensors'
import weather from './reducers/Weather'

import thunk from 'redux-thunk';

const store = createStore(combineReducers({ sensors, weather }), applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
