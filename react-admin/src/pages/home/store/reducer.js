import {fromJS} from "immutable";
import {actionTypes} from "./index.js"
// 初始化数据
const defaultState=fromJS({
	homeData:"我是首页store中的数据",
	list:["你好sad","撒大声地","送达ad"]
})
export default (state=defaultState,action)=>{
	switch(action.type){
		case actionTypes.CHANGE_HOME_DATA:
			return state.set('homeData', action.homeData)
		default:
			return state;
	}
}