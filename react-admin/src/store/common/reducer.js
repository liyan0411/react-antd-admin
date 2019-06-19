import {fromJS} from "immutable";
import {actionTypes} from "./index"
// 初始化数据
const defaultState = fromJS({
  current: window.location.hash.substr(1)
})
export default (state=defaultState,action)=>{
	switch (action.type) {
    case actionTypes.CHANGE_MENU_CURRENT:
      return state.set('current', action.current)
    default:
      return state
  }
}