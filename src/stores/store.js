// import {createStore} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from '../reducers/reducers.js';

// const store = createStore(reducers);
let store = applyMiddleware(thunkMiddleware)(createStore)(reducers);
// let store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

export default store;