import * as actionTypes from './actionTypes'

export const setControlDisabled = isBack => {
  return dispatch => {
    const action = {
      type: actionTypes.CHANGE_BACK,
      isBack
    }
    dispatch(action)
  }
}
