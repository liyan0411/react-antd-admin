// import {fromJS} from "immutable";//ie不太友好 暂不使用
import {actionTypes} from "./index"
// 初始化数据
// const defaultState = fromJS({
//   current: window.location.hash.substr(1)
// })
const defaultState = {
  current: window.location.hash.substr(1),
  pathList:[]
};
export default (state=defaultState,action)=>{
	switch (action.type) {
    case actionTypes.CHANGE_MENU_CURRENT:
      // return state.set('current', action.current)
      return Object.assign({}, state, {
        current: action.current
      })
    case actionTypes.CHANGE_PATH:
      return Object.assign({}, state, {
        pathList: action.pathList
      })
    default:
      return state
  }
}
/**
 * Object.assign()方法用于将所有自有的可枚举的属性的值从一个或多个源对象复制到目标对象，并返回目标对象。
 * Object.assign(target, ...sources);
 * 参数
 * target：目标对象
 * sources：一个或多个源对象
 * 返回值(target，目标对象)
 *如果目标对象中拥有源对象的属性，那么目标对象的同名属性值会被源对象的同名属性值覆盖，如果多个源对象中拥有同名的属性，则后者会覆盖前者。
 */
