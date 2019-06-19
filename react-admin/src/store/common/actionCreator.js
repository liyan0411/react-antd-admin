import * as actionTypes from "./actionTypes"
export const changeMenuCurrent = (current) => {
	return dispatch => {
    const action = {
      type: actionTypes.CHANGE_MENU_CURRENT,
      current
		}
    dispatch(action);
  }
}