import {
	createAction
} from 'redux-actions';
import promiseMiddleware from 'redux-promise';
import axios from 'axios';


export const CHANGE_TAB = 'changetab';

export const changetab = createAction("CHANGE_TAB");

export const changeTabData = createAction('CHANGE_TAB_DATA')

// export const fetchThing = createAction('FETCH_THING', () =>
//      axios.get("../json/fileChange.json")
//                  .then(function(response) {
//                 return response.data;
//             })
// )

export const fetchThing = function() {
	return dispatch => {
		axios.get("../json/fileChange.json")
			.then(function(response) {
				dispatch({
					type: 'FETCH_THING',
					payload: response.data
				})
			})

	}
}