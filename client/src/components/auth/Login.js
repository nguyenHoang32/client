import React, { useState } from 'react';

import { Link, Redirect } from 'react-router-dom';
import { login } from '../../action/auth';
import { connect } from 'react-redux';
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password,  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  }
  if(isAuthenticated){
    return <Redirect to="/dashboard" />
  }
  return <React.Fragment>
    <h1 className="large text-primary">Login</h1>
      <p className="lead"><i className="fas fa-user"></i> Login your account</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={onChange}/>

        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
  </React.Fragment>
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { login })(Login);