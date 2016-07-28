import {createAction} from 'redux-actions';
import promiseMiddleware from 'redux-promise';
import axios from 'axios';

require("babel-polyfill");

export const CHANGE_TAB = 'changetab';

export const changetab = createAction("CHANGE_TAB");

export const changeTabData = createAction('CHANGE_TAB_DATA')

export const fetchThing = createAction('FETCH_THING', () =>
    axios.get("https://api.github.com/users/takaki").then(function(response) {
        return response.data.name;
})
)