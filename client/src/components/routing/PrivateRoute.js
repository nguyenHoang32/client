import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <h1>Loading...</h1>
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);

// import React from 'react';
// import { connect } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
//   <Route
//   {...rest}
//   render={props => !isAuthenticated && !loading ? <Redirect to='/login'/> : <Component {...props} />}/>
// )
// const mapStateToProps = state => ({
//   auth: state.auth
// })
// export default connect(mapStateToProps)(PrivateRoute);
