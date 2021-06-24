import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './App';
import alcoholReducer from './reducers/alcoholReducer';
import cocktailReducer from './reducers/cocktailReducer';
import {BrowserRouter as Router} from 'react-router-dom';

const reducers = combineReducers({
  alcohols: alcoholReducer,
  cocktails: cocktailReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


