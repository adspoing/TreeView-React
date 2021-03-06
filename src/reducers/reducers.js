import {handleActions} from 'redux-actions';

export default handleActions({
	['CHANGE_TAB']: (state,action) => {
		return {
			activeTab: action.payload.Name
		}
	},
	['FETCH_THING']:(state,action) => {
		// console.log(action.payload);
		return {
			activeTab:state.activeTab,
			tableBody:action.payload
		}
	}
},{
	activeTab:0,
	tableBody: []
})