import axios from 'axios';

const setAuthToken = token => {
  if(token){
    axios.defaults.headers.common['x-auth-token'] = token
  }else{
    delete axios.defaults.headers.common['x-auth-token']
  }
}
export default setAuthToken;
// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token');
//   // const token = store.getState().session.token;
//   config.headers.(x-auth-token) =  token;

//   return config;
// });