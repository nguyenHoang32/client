import { SET_ALERT, REMOVE_ALERT } from './Types';
import uuid from 'uuid/v4';
export const setAlert = (message, alertType, time = 8000) => dispatch => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: {
      message,
      alertType,
      id
    }
  })
  setTimeout(() => dispatch({
    type: REMOVE_ALERT,
    payload: id
  }), time)
}