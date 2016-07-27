import {handleActions} from 'redux-actions';
export const CHANGE_TAB = 'changetab';

export default handleActions({
	['CHANGE_TAB']: (state,action) => {
		return {
			activeTab: action.payload.Name
		}
	}
},{
	activeTab:0
})