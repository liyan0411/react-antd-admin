// import {fromJs} from "immutable";
import { actionTypes } from "./index.js";
export const changeHomeData = homeData => {
  return dispatch => {
    const action = {
      type: actionTypes.CHANGE_HOME_DATA,
      homeData
    };
    dispatch(action);
  };
};
