import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile'; 
import post from './post';
const rootReducers = combineReducers({
  alert,
  auth,
  profile,
  post
})
export default rootReducers;