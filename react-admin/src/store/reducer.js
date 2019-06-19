import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '@/pages/home/store';
import { reducer as commonReducer } from './common/index'
// combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
const reducer = combineReducers({
  common:commonReducer,//公共store
  home: homeReducer
})
export default reducer;
