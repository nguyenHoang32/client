import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_REPOS, NO_REPOS } from '../action/Types';

const initialState = {
  profile: null,
  loading: true,
  repos: [],
  error: {},
  profiles: []
}
export default function(state = initialState, action){
  const { type, payload } = action;
  switch(type){
    case GET_PROFILE:
    case UPDATE_PROFILE: {
      return{
        ...state,
        profile: payload,
        loading: false
      }
    }
    case GET_PROFILES: {
      return {
        ...state,
        loading: false,
        profiles: payload
      }
    }
    case GET_REPOS: {
      return {
        ...state,
        loading: false,
        repos: payload
      }
    }
    case NO_REPOS: {
      return {
        ...state,
        loading: false,
        repos: []
      }
    }
    case PROFILE_ERROR: 
    case CLEAR_PROFILE:{
      return{
        ...state,
        loading: false,
        profile: null,
        error: payload
      }
    }
    
    default : return state

  }
}