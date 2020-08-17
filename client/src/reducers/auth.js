import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADER, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../action/Types';
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated : null,
  loading: true,
  user: null
}
export default function(state = initialState, action){
  const { type, payload } = action;
  switch(type){
    case USER_LOADER: {
      return{
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS: {
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    }
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL: 
    case LOGOUT: {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    }
    default: return state;
  }
}