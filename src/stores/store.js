// import {createStore} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import reducers from '../reducers/reducers.js';

// const store = createStore(reducers);
let store = applyMiddleware(thunkMiddleware)(createStore)(reducers);
// const store = createStore(reducers, applyMiddleware(promiseMiddleware));
// let createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)
// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware, // lets us dispatch() functions
// )(createStore);

// const store = createStoreWithMiddleware(reducers);
// let store = createStoreWithMiddleware(reducers)
// let store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

export default store;