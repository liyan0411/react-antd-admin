import * as actionTypes from './actionTypes'

export const changePath = pathList => {
  return dispatch => {
    const action = {
      type: actionTypes.CHANGE_PATH,
      pathList
    }
    dispatch(action)
  }
}
