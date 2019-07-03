// import {fromJs} from "immutable";
import { actionTypes } from './index.js'
export const changeHomeData=()=>{
	return (dispatch)=>{
		const action = {
			type: actionTypes.CHANGE_HOME_DATA,
			homeData:"我是被刚刚修改后的homedata"
		}
		dispatch(action)
	}
}